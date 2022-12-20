import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cat } from 'src/app/shared/models/cat.model';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.page.html',
  styleUrls: ['./edit-cat.page.scss'],
})
export class EditCatPage implements OnInit {
  editCatForm: FormGroup;
  imgInput: FormControl;
  breedInput: FormControl;
  breedOriginInput: FormControl;
  vocalisationInput: FormControl;
  dogFriendlyInput: FormControl;
  affectionInput: FormControl;
  private catSub: Subscription;
  cat: Cat;
  catId: string;
  isLoading = false;

  constructor(
    private loadingCtrl: LoadingController,
    private catsService: CatsService,
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.navCtrl.navigateBack('/cats');
        return;
      }
      this.catId = paramMap.get("catId");
      this.isLoading = true;
      this.catSub = this.catsService
      .getCat(paramMap.get("catId"))
      .subscribe(
        cat => {
          this.cat = cat;
          this.imgInput = new FormControl(cat.img, [Validators.required]);
          this.breedInput = new FormControl(cat.breedName, [Validators.required]);
          this.breedOriginInput = new FormControl(cat.breedOrigin, [Validators.required, Validators.maxLength(56),]); //The United Kingdom of Great Britain and Northern Ireland
          this.vocalisationInput = new FormControl(cat.vocalisation, [Validators.required, CustomValidators.validLevel(0,5),]);
          this.dogFriendlyInput = new FormControl(cat.dogFriendly, [Validators.required, CustomValidators.validLevel(0,5),]);
          this.affectionInput = new FormControl(cat.affectionLevel, [Validators.required, CustomValidators.validLevel(0,5),]);

          this.editCatForm = new FormGroup({
            img: this.imgInput,
            breedName: this.breedInput,
            breedOrigin: this.breedOriginInput,
            vocalisation: this.vocalisationInput,
            dogFriendly: this.dogFriendlyInput,
            affectionLevel: this.affectionInput,  
          })
          this.isLoading = false
        }, 
        error => {
          this.alertCtrl
              .create({
                header: 'An error occurred!',
                message: 'Cat details could not be fetched. Please try again later.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/cats']);
                    }
                  }
                ]
              })
              .then(alertEl => {
                alertEl.present();
              });
        }
        )
    })

    
  }

  editCat() {
    
  }

}
  