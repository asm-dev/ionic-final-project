import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  miau():void {
    let audio = new Audio('../../assets/audio/cat-meow.mp3')
    audio.play()
    console.log("meow")
  }
}
