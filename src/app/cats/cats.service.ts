import { Injectable } from '@angular/core';
import { Cat } from '../shared/models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private _cats: Cat[] = [
    new Cat(0, "https://cdn2.thecatapi.com/images/TGuAku7fM.jpg", "Abyssinian", "Egypt", 1, 4, 5, false),
    new Cat(1, "https://cdn2.thecatapi.com/images/tv8tNeYaU.jpg", "Abyssinian", "Egypt", 1, 4, 5, false),
    new Cat(2, "https://cdn2.thecatapi.com/images/SwjDQ76Ix.jpg", "Balinese", "United States", 5, 5, 5, false),
  ]

  constructor() { }

  get cats(): Cat[] {
    return [...this._cats];
  }

  getCat(id: string) {
    return {...this.cats.find(cat => String(cat.id) === id)};
  }
}
