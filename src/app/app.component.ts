import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular hello-world';
  post = {
    title: "Title",
    isFavorite: true
  };
  canSave = true;
  task = {
    title: 'Review applications',
    assignee: null,
    request : {
      details: 'request details'
    }
  };

 onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
   console.log("Favorite changed.", eventArgs);
 }

}
