import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatsListPageRoutingModule } from './cats-list-routing.module';

import { CatsListPage } from './cats-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatsListPageRoutingModule
  ],
  declarations: [CatsListPage]
})
export class CatsListPageModule {}
