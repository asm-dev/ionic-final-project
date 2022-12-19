import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsPage } from './cats.page';

const routes: Routes = [
  {
    path: '',
    component: CatsPage
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit-cat/edit-cat.module').then( m => m.EditCatPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./new-cat/new-cat.module').then( m => m.NewCatPageModule)
  },
  {
    path: ':catId',
    loadChildren: () => import('./cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsPageRoutingModule {}
