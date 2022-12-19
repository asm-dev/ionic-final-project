import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cat } from '../shared/models/cat.model';
import { CatsService } from './cats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage implements OnInit, OnDestroy {
  loadedCats: Cat[];
  private catsSub: Subscription;
  isLoading = false;

  constructor(private catsService: CatsService) {
   
  }

  ngOnInit() {
    // this.loadedCats = this.catsService.cats
    this.catsSub = this.catsService.cats.subscribe(cats => {
      this.loadedCats = cats;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.catsService.fetchCats().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.catsSub) {
      this.catsSub.unsubscribe();
    }
  }

}
