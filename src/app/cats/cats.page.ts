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

  miau():void {
    let audio = new Audio('../../assets/audio/cat-meow.mp3')
    audio.play()
    console.log("meow")
  }
}
