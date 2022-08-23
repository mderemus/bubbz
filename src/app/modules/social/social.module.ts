import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social.component';
import { FeedComponent } from './feed/feed.component';
import { SocialRoutingModule } from './social-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SocialRoutingModule,
  ],
  declarations: [SocialComponent, FeedComponent]
})
export class SocialModule { }
