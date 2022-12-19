import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCatPageRoutingModule } from './new-cat-routing.module';

import { NewCatPage } from './new-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewCatPage]
})
export class NewCatPageModule {}
