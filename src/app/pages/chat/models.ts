import { v5 as uuid } from 'uuid';
export class User {
  id: string;
  constructor(public name: string, public avatarSrc: string) {
    this.id = uuid();
  }
}

export class Thread {
  id: string;
  lastMessage: Message;
  name: string;
  avatarSrc: String;
  constructor(id?: string, name?: string, avastarSrc?: string) {
    this.id = id || uuid();
    this.name = name;
    this.avatarSrc = avastarSrc;
  }
}

export class Message {
  id: string;
  sendAt: string;
  isRead: boolean;
  text: string;
  author: User;
  thread: Thread;
}
