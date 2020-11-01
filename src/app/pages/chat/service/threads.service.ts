import { Injectable } from '@angular/core';
import { Thread, Message } from '../models';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { MessagesService } from './message.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ThreadsService {
  threads: Observable<{ [key: string]: Thread }>;
  orderedThreads: Observable<Thread[]>;
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());
  currentThreadMessages: Observable<Message[]>;
  constructor(private messagesService: MessagesService) {
    this.threads = this.messagesService.messages.pipe(
      map((messages: Message[]) => {
        let threads: { [key: string]: Thread } = {};
        messages.map((message: Message) => {
          threads[message.thread.id] =
            threads[message.thread.id] || message.thread;
          let messagesThread: Thread = threads[message.thread.id];

          if (
            !messagesThread.lastMessage ||
            messagesThread.lastMessage.sendAt < message.sendAt
          ) {
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      })
    );

    this.orderedThreads = this.threads.pipe(
      map((threadGroups: { [key: string]: Thread }) => {
        let threads: Thread[] = Object.values(threadGroups);
        return threads.sort((first: Thread, last: Thread) => {
          return parseInt(first.lastMessage.sendAt)   - parseInt(last.lastMessage.sendAt) ;
        });
      })
    );

    this.currentThreadMessages = combineLatest(
      this.currentThread,
      messagesService.messages,
      (currentThread: Thread, messages: Message[]) => {
        if (currentThread && messages.length > 0) {
          return messages
            .filter((message: Message) => {
              return message.thread.id === currentThread.id;
            })
            .map((message: Message) => {
              message.isRead = true;
              return message;
            });
        } else {
          return [];
        }
      }
    );
    this.currentThread.subscribe(this.messagesService.markThreadAsRead);
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }
}

export var threadsServiceInjectables: Array<any> = [ThreadsService];
