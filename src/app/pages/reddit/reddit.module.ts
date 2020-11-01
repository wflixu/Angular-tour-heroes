import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedditRoutingModule } from './reddit-routing.module';
import { RedditComponent } from './reddit.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [RedditComponent, ArticleComponent],
  imports: [
    CommonModule,
    RedditRoutingModule
  ]
})
export class RedditModule { }
