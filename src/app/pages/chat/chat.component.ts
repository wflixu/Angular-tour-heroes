import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThreadsService } from './service/threads.service';
import { UserService } from './service/user.service';
import { MessagesService } from './service/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  constructor(
    private messagesService: MessagesService,
    private threadsService: ThreadsService,
    private userService: UserService
  ) {
    // ChatExampleData.init(messagesService, threadsService, userService);
  }

  ngOnInit(): void {
    console.log('chat ng init ');
  }
}
