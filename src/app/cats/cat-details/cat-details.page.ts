import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.page.html',
  styleUrls: ['./cat-details.page.scss'],
})
export class CatDetailsPage implements OnInit {
  cat: Cat;
  // isEditable = false;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private catsService: CatsService,
  ) { 
    this.cat = new Cat("", "", "", "", 0, 0, 0, false)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.navCtrl.navigateBack('/cats');
        return;
      }
      this.cat = this.catsService.getCat(paramMap.get('catId'));
    });
  }

  editCat() {
    console.log("Edit")
  }

  deleteCat() {
    console.log("Delete")
  }

}
