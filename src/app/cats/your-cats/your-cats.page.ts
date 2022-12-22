import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

import { Subscription, switchMap, take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-your-cats',
  templateUrl: './your-cats.page.html',
  styleUrls: ['./your-cats.page.scss'],
})
export class YourCatsPage implements OnInit, OnDestroy {
  yourCats: Cat[];
  private catsSub: Subscription;
  isLoading = false;
  userId: string;

  constructor(
    private catsService: CatsService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userId.subscribe((userId) => {
      this.userId = userId;
      this.catsSub = this.catsService.cats.subscribe(cats => {
        this.yourCats = cats.filter(cat => { return cat['userId'] === userId })
    });
    
    // this.catsSub = this.catsService.cats.subscribe(cats => {
    //   this.yourCats = cats.filter(cat => { return cat['editable'] === true })
      //return if cat.userId === UserID
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

  edit(catID:string, slidingItem: IonItemSliding){
    slidingItem.close()
    this.router.navigate(['/cats/tabs/your-cats/edit', catID])
  }

}






  

