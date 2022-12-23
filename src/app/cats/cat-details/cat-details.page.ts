import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatsService } from '../cats.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';

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
  userId: string;
  mapUrl: string;
  lat: string | number;
  lgn: string | number;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private catsService: CatsService,
    private alertCtrl: AlertController,
    private router: Router,
    private authService: AuthService,
  ) { 
    
    //this.lat = String(40.3865266)
    this.lat = String(this.getRandomLocation(-90,90))
    //this.lgn = String(-3.7318372)
    this.lgn = String(this.getRandomLocation(-180,180))
    this.mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${this.lat},${this.lgn}&zoom=14&size=500x300&maptype=roadmap &markers=color:black%7Clabel:Place%7C${this.lat},${this.lgn} &key=${environment.googleMapsAPIKey}`
  }

  getRandomLocation(min: number, max:number) {
    let precision = Math.pow(10, 6);
    let randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber * precision) / precision;
  }

  ngOnInit() {
    this.authService.userId.subscribe((userId) => {
      this.userId = userId;
    })
    console.log(`Latitude:${this.lat}, longitude:${this.lgn}`)
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {

        this.navCtrl.navigateBack('/cats/tabs/all-cats');
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
                      this.router.navigate(['/cats/tabs/all-cats']);
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
    this.catSub = this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.navCtrl.navigateBack('/cats/tabs/your-cats');
        return;
      }
      this.catId = this.route.snapshot.params['catId']
      this.router.navigate(['/cats/tabs/your-cats/edit', this.catId])
    })
  }

  deleteCat() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('catId')) {
        this.navCtrl.navigateBack('/cats/tabs/all-cats');
        return;
      }
      this.catId = this.route.snapshot.params['catId'];
      this.catsService.deleteCat(this.catId).subscribe(() => {
        console.log('Deleted cat' + this.catId);
        this.router.navigate(['/cats/tabs/your-cats']);
      });
     
    });
  }

  ionViewWillLeave(){
    this.catSub.unsubscribe();
  }

}
