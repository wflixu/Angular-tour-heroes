import { Component, OnInit } from '@angular/core';
import { Message, User } from '../models';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.less']
})
export class ChatMessageComponent implements OnInit {
  message: Message;
  currentUser: User;
  incoming: boolean;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user: User) => {
      this.currentUser = user;
      if (this.message.author && user) {
        this.incoming = this.message.author.id !== user.id;
      }
    });
  }
}
