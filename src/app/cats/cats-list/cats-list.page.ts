import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatsService } from '../cats.service';


@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.page.html',
  styleUrls: ['./cats-list.page.scss'],
})
export class CatsListPage implements OnInit {

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