import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { CatsService } from '../../cats.service';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.page.html',
  styleUrls: ['./new-cat.page.scss'],
})
export class NewCatPage implements OnInit {
  newCatForm: FormGroup;
  imgInput: FormControl;
  breedInput: FormControl;
  breedOriginInput: FormControl;
  vocalisationInput: FormControl;
  dogFriendlyInput: FormControl;
  affectionInput: FormControl;

  constructor(
    private loadingCtrl: LoadingController,
    private catsService: CatsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.imgInput = new FormControl('', [Validators.required]);
    this.breedInput = new FormControl('', [Validators.required]);
    this.breedOriginInput = new FormControl('', [Validators.required, Validators.maxLength(56),]); //The United Kingdom of Great Britain and Northern Ireland
    this.vocalisationInput = new FormControl('', [Validators.required, CustomValidators.validLevel(0,5),]);
    this.dogFriendlyInput = new FormControl('', [Validators.required, CustomValidators.validLevel(0,5),]);
    this.affectionInput = new FormControl('', [Validators.required, CustomValidators.validLevel(0,5),]);

    this.newCatForm = new FormGroup({
      img: this.imgInput,
      breedName: this.breedInput,
      breedOrigin: this.breedOriginInput,
      vocalisation: this.vocalisationInput,
      dogFriendly: this.dogFriendlyInput,
      affectionLevel: this.affectionInput,  
    })
  }

  addNewCat() {
    if (!this.newCatForm.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Creating cat...'
      })
      .then(loadingEl => {
        loadingEl.present();
        this.catsService
          .addCat(
            this.newCatForm.value.img,
            this.newCatForm.value.breedName,
            this.newCatForm.value.breedOrigin,
            this.newCatForm.value.vocalisation,
            this.newCatForm.value.dogFriendly,
            this.newCatForm.value.affectionLevel
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.newCatForm.reset();
            this.router.navigate(['/cats/tabs/your-cats']);
          });
      });
  }

}
