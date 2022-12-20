import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cat } from '../shared/models/cat.model';
import { CatsService } from './cats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage implements OnInit {
  
  constructor() {
   
  }

  ngOnInit() {
  }

}
