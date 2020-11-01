import { Injectable } from '@angular/core';
import { Message, Thread, User } from '../models';
import { Subject, Observable } from 'rxjs';
import { filter, scan, map, shareReplay } from 'rxjs/operators';

let initialMessages: Message[] = [];
interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates.pipe(
      scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages);
      }, initialMessages),
      shareReplay(1)
    );

    this.create
      .pipe(
        map(
          (message: Message): IMessagesOperation => {
            return (messages: Message[]) => {
              return messages.concat(message);
            };
          }
        )
      )
      .subscribe(this.updates);

    this.newMessages.subscribe(this.create);

    this.markThreadAsRead
      .pipe(
        map((thread: Thread) => {
          return (messages: Message[]) => {
            messages.map((message: Message) => {
              if (message.thread.id == thread.id) {
                message.isRead = true;
              }
              return message;
            });
          };
        })
      )
      .subscribe(this.updates);
  }
  addMessage(message: Message): void {
    this.newMessages.next(message);
  }
  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages.pipe(
      filter((message: Message) => {
        // belongs to this thread
        return message.thread.id === thread.id && message.author.id !== user.id;
      })
    );
  }
}

export var messagesServiceInjectables: Array<any> = [MessagesService];
