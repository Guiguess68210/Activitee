import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() index: number;


  constructor(private postsService : PostsService) { }

  ngOnInit() {
  }

  onLoveIt(){
    this.loveIts =this.postsService.onLoveIt(this.loveIts);
    console.log(this.loveIts)
  }
  
  onDontLoveIt(){
    this.loveIts =this.postsService.onDontLoveIt(this.loveIts);
    console.log(this.loveIts)
  }

  onRemovePost(){
    this.postsService.deletePost(this.index);
  }
}
