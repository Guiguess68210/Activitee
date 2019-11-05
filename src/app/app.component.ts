import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';

  posts = [
    {
      title: 'Hello World',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 5,
      created_at: 'Wed Oct 30 2019 16:33:22'
    },
    {
      title: 'Hello Angular',
      content: 'Encore cette histoire qui casse la tete',
      loveIts: 0,
      created_at: 'Wed Oct 27 2019 16:33:22'
    },
    {
      title: 'Hello Java',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 6,
      created_at: 'Wed Oct 12 2019 16:33:22'
    },
    {
      title: 'Hello Python',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 7,
      created_at: 'Wed Oct 01 2019 16:33:22'
    }
  ];
}
