import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  //inputs: ['isFavorite']
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean = false;
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

  constructor() {}
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}