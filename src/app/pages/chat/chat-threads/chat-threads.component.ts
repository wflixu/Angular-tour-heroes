import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../service/threads.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.less']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;
  constructor(private threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit(): void {}
}
