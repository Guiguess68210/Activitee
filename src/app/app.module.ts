import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { FormsModule }   from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
