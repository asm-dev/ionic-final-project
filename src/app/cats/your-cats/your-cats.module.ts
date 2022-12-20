import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourCatsPageRoutingModule } from './your-cats-routing.module';

import { YourCatsPage } from './your-cats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourCatsPageRoutingModule
  ],
  declarations: [YourCatsPage]
})
export class YourCatsPageModule {}
