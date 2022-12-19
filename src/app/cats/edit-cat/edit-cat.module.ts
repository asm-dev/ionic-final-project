import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCatPageRoutingModule } from './edit-cat-routing.module';

import { EditCatPage } from './edit-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCatPageRoutingModule
  ],
  declarations: [EditCatPage]
})
export class EditCatPageModule {}
