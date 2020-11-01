import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread, Message, User } from '../models';
import { MessagesService } from '../service/message.service';
import { ThreadsService } from '../service/threads.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less']
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(
    private messagesService: MessagesService,
    private threadsService: ThreadsService,
    private userService: UserService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;
    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe((thread: Thread) => {
      this.currentThread = thread;
    });

    this.userService.currentUser.subscribe((user: User) => {
      this.currentUser = user;
    });

    this.messages.subscribe((messages: Array<Message>) => {
      setTimeout(() => {
        this.scrollToBottom();
      });
    });
  }

  sendMessage(): void {
    let m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
  }

  onEnter(event: any): void {
    event.preventDefault();
    this.sendMessage();
  }

  scrollToBottom(): void {
    let scrollPane: any = this.el.nativeElement.querySelector(
      '.msg-container-base'
    );
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
