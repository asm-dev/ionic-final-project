import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsListPage } from './cats-list.page';

const routes: Routes = [
  {
    path: '',
    component: CatsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsListPageRoutingModule {}
