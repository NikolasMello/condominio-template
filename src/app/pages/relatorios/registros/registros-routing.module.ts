import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'entradas',
        loadComponent: ()=> import('./controle-entradas/controle-entradas.component')
      },
      {
        path:'saidas',
        loadComponent: ()=> import('./controle-saidas/controle-saidas.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule { }
