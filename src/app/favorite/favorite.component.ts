import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
    .glyphicon{
      color:green;
  }
    `],
    styleUrls: ['./favorite.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();  

  onClick(){ 
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});

    //console.log(this.isFavorite? "Favorite" : "Unfavorite");

  }

}

export  interface FavoriteChangedEventArgs{
  newValue: boolean
}
