import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatsService } from '../cats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.page.html',
  styleUrls: ['./cat-details.page.scss'],
})
export class CatDetailsPage implements OnInit {
  cat: Cat;
  catId: string;
  isLoading = false;
  private catSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private catsService: CatsService,
    private alertCtrl: AlertController,
    private router: Router,
  ) { 
    this.cat = new Cat("", "", "", "", 0, 0, 0, false)
  }

  // ngOnInit() {
  //   this.route.paramMap.subscribe(paramMap => {
  //     if (!paramMap.has('catId')) {
  //       this.navCtrl.navigateBack('/cats');
  //       return;
  //     }
  //     this.cat = this.catsService.getCat(paramMap.get('catId'));
  //   });
  // }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.navCtrl.navigateBack('/cats');
        return;
      }
      this.isLoading = true;
      this.catSub = this.catsService
        .getCat(paramMap.get('catId'))
        .subscribe(
          cat => {
            this.cat = cat;
            this.isLoading = false;
          },
          error => {
            this.alertCtrl
              .create({
                header: 'An error ocurred!',
                message: 'Could not load cat.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/cats']);
                    }
                  }
                ]
              })
              .then(alertEl => alertEl.present());
          }
        );
    });
  }

  editCat() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.navCtrl.navigateBack('/cats');
        return;
      }
      this.catId = this.route.snapshot.params['catId']
      this.router.navigate(['/cats/tabs/your-cats/edit', this.catId])
    })
  }

  deleteCat() {
    this.route.paramMap.subscribe(paramMap => {
    if (!paramMap.has('catId')) {
      this.navCtrl.navigateBack('/cats/tabs/all-cats');
      return;
    }
    this.catId = this.route.snapshot.params['catId']
    this.catsService.deleteCat(this.catId)
    this.router.navigate(['/cats/tabs/all-cats'])
    })
  }

}
