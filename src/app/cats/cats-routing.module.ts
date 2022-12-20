import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsPage } from './cats.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CatsPage,
    children: [
      {
        path: 'all-cats',
        children: [
          {
            path: '',
            loadChildren: () => import('./cats-list/cats-list.module').then( m => m.CatsListPageModule),
          },
          {
            path: ':catId',
            loadChildren: () => import('./cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
          }
        ]
      }, 
      {
        path: 'your-cats',
        children: [
          {
            path: '',
            loadChildren: () => import('./your-cats/your-cats.module').then( m => m.YourCatsPageModule),
          },
          {
            path: 'create',
            loadChildren: () => import('./your-cats/new-cat/new-cat.module').then( m => m.NewCatPageModule)
          },
          {
            path: 'edit/:catId',
            loadChildren: () => import('./your-cats/edit-cat/edit-cat.module').then( m => m.EditCatPageModule)
          },
          {
            path: ':catId',
            loadChildren: () => import('./cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/cats',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'new',
    loadChildren: () => import('./your-cats/new-cat/new-cat.module').then( m => m.NewCatPageModule)
  },
  {
    path: 'edit/:catId',
    loadChildren: () => import('./your-cats/edit-cat/edit-cat.module').then( m => m.EditCatPageModule)
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
