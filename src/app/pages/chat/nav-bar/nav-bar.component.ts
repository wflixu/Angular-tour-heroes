import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../service/message.service';
import { ThreadsService } from '../service/threads.service';
import { Message, Thread } from '../models';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  unreadMessagesCount: number;
  constructor(
    private messagesService: MessagesService,
    private threadsService: ThreadsService
  ) {}

  ngOnInit(): void {
    // combineLatest( this.messagesService.messages, this.threadsService.currentThread)
    //   .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
    //     this.unreadMessagesCount = _.reduce(
    //       messages,
    //       (sum: number, m: Message) => {
    //         let messageIsInCurrentThread: boolean =
    //           m.thread && currentThread && currentThread.id === m.thread.id;
    //         if (m && !m.isRead && !messageIsInCurrentThread) {
    //           sum = sum + 1;
    //         }
    //         return sum;
    //       },
    //       0
    //     );
    //   });
  }
}
