import { Component, OnInit } from '@angular/core';
import { Cat } from '../shared/models/cat.model';
import { CatsService } from './cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage implements OnInit {
  loadedCats: Cat[]

  constructor(private catsService: CatsService) {
    this.loadedCats = []
  }

  ngOnInit() {
    this.loadedCats = this.catsService.cats
  }

}
