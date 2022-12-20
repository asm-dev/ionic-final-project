import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourCatsPage } from './your-cats.page';

const routes: Routes = [
  {
    path: '',
    component: YourCatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourCatsPageRoutingModule {}
