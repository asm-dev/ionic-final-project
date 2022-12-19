import { Injectable } from '@angular/core';
import { Cat } from '../shared/models/cat.model';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

interface CatData {
  id: string;
  img: string;
  breed_name: string;
  breed_origin: string;
  vocalisation: number;
  dog_friendly: number;
  affection_level: number;
  editable: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CatsService {
  private _cats: Cat[] = [
    new Cat("asdas", "https://cdn2.thecatapi.com/images/TGuAku7fM.jpg", "Abyssinian", "Egypt", 1, 4, 5, false),
    new Cat("bgjka", "https://cdn2.thecatapi.com/images/tv8tNeYaU.jpg", "Abyssinian", "Egypt", 1, 4, 5, false),
    new Cat("asjkq", "https://cdn2.thecatapi.com/images/SwjDQ76Ix.jpg", "Balinese", "United States", 5, 5, 5, true),
  ]

  constructor(
    // private http: HttpClient
  ) { }

  get cats(): Cat[] {
    return [...this._cats];
  }

  getCat(id: string) {
    return {...this._cats.find(cat => cat.id === id)};
  }

  // getCat(id: string) {
  //   return this.http
  //     .get<CatData>(
  //       `https://ionic-angular-44776-default-rtdb.firebaseio.com/offered-places/${id}.json`
  //     )
  //     .pipe(
  //       map(catData => {
  //         return new Cat(
  //           id,
  //           catData.title,
  //           catData.description,
  //           catData.imageUrl,
  //           catData.price,
  //           new Date(catData.availableFrom),
  //           new Date(catData.availableTo),
  //           catData.userId,
  //           catData.location
  //         );
  //       })
  //     );
  // }
}
