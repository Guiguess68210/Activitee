import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule }   from '@angular/forms';
import {  PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [  {path: '', component: PostlistComponent},
{path: 'posts', component: PostlistComponent},
{path: 'newPost', component:NewPostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
