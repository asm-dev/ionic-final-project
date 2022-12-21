import { Injectable } from '@angular/core';
import { Cat } from '../shared/models/cat.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators';

interface CatData {
  id: string;
  img: string;
  breedName: string;
  breedOrigin: string;
  vocalisation: number;
  dogFriendly: number;
  affectionLevel: number;
  editable: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CatsService {
  private _cats = new BehaviorSubject<Cat[]>([]);

  get cats() {
    return this._cats.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }

  fetchCats() {
    return this.http
      .get<{ [key: string]: CatData }>(
        'https://cat-shelter-ionic-default-rtdb.firebaseio.com/cats.json'
      )
      .pipe(
        map(resData => {
          const cats = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              cats.push(
                new Cat(
                  key,
                  resData[key].img,
                  resData[key].breedName,
                  resData[key].breedOrigin,
                  resData[key].vocalisation,
                  resData[key].dogFriendly,
                  resData[key].affectionLevel,
                  resData[key].editable
                )
              );
            }
          }
          return cats;
          // return [];
        }),
        tap(cats => {
          this._cats.next(cats);
        })
      );
  }

  getCat(id: string) {
    return this.http
      .get<CatData>(
        `https://cat-shelter-ionic-default-rtdb.firebaseio.com/cats/${id}.json`
      )
      .pipe(
        map(catData => {
          return new Cat(
            id,
            catData.img,
            catData.breedName,
            catData.breedOrigin,
            catData.vocalisation,
            catData.dogFriendly,
            catData.affectionLevel,
            catData.editable
          );
        })
      );
  }

  addCat(
    img: string,
    breedName: string,
    breedOrigin: string,
    vocalisation: number,
    dogFriendly: number,
    affectionLevel: number
  ) {
    let generatedId: string;
    const newCat = new Cat(
      Math.random().toString(), //id
      img,
      breedName,
      breedOrigin,
      vocalisation,
      dogFriendly,
      affectionLevel,
      true, //editable bool
    );
    return this.http
      .post<{ name: string }>(
        'https://cat-shelter-ionic-default-rtdb.firebaseio.com/cats.json',
        {
          ...newCat,
          id: null
        }
      )
      .pipe(
        switchMap(resData => {
          generatedId = resData.name;
          return this.cats;
        }),
        take(1),
        tap(cats => {
          newCat.id = generatedId;
          this._cats.next(cats.concat(newCat));
        })
      );
  }

  updateCat(
    catId: string, 
    img: string,
    breedName: string,
    breedOrigin: string,
    vocalisation: number,
    dogFriendly: number,
    affectionLevel: number,
  ) {

    let updatedCats: Cat[];
    return this.cats.pipe(
      take(1),
      switchMap(cats => {
        if (!cats || cats.length <= 0) {
          return this.fetchCats();
        } else {
          return of(cats);
        }
      }),
      switchMap(cats => {
        const updatedCatIndex = cats.findIndex(c => c.id === catId);
        updatedCats = [...cats];
        const oldCat = updatedCats[updatedCatIndex];
        updatedCats[updatedCatIndex] = new Cat(
          oldCat.id,
          img,
          breedName,
          breedOrigin,
          vocalisation,
          dogFriendly,
          affectionLevel,
          oldCat.editable,
        );
        return this.http.put(
          `https://cat-shelter-ionic-default-rtdb.firebaseio.com/cats/${catId}.json`,
          { ...updatedCats[updatedCatIndex], id: null }
        );
      }),
      tap(() => {
        this._cats.next(updatedCats);
      })
    );
  }

  deleteCat(catId: string) {
    // console.log("I work" + catId)
    //   return this.http.delete(`https://cat-shelter-ionic-default-rtdb.firebaseio.com/cats/${catId}.json`)
    return this.http
      .delete(
        `https://cat-shelter-ionic-default-rtdb.firebaseio.com/cats/${catId}.json`
      )
      .pipe(
        switchMap(() => {
          return this.cats;
        }),
        tap((cats) => {
          this._cats.next(cats.filter((cat) => cat.id !== catId));
        })
      );
  }
}
