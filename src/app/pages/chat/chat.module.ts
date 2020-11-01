import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatComponent,
    NavBarComponent,
    ChatWindowComponent,
    ChatThreadsComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    // utilInjectables
  ],
  imports: [CommonModule, FormsModule, ChatRoutingModule],
  providers: []
})
export class ChatModule {}
