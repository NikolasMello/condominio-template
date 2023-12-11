import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'moradia',
        loadComponent: ()=> import('./moradia/moradia.component')
      },
      {
        path:'moveis',
        loadComponent: ()=> import('./moveis/moveis.component')
      },
      {
        path:'cartoes',
        loadComponent: ()=> import('./cartoes/cartoes.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartamentoRoutingModule { }
