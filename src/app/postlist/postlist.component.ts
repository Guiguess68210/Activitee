import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  posts : any[];
  postSubscription : Subscription;

  constructor(private postsService : PostsService) { }

  ngOnInit(){
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (POSTS: any[]) => {
        this.posts = POSTS; 
      }
    );
   this.postsService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
