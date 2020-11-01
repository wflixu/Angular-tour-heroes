import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../models';
import { ThreadsService } from '../service/threads.service';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.less']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;

  selected: boolean = false;
  constructor(private threadsService: ThreadsService) {}
  ngOnInit(): void {
    this.threadsService.currentThread.subscribe((currentThread: Thread) => {
      this.selected =
        currentThread && this.thread && currentThread.id === this.thread.id;
    });
  }
  onClick(event: any): void {
    event.preventDefault();
    this.threadsService.setCurrentThread(this.thread);
  }
}
