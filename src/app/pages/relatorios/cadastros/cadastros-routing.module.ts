import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'pessoa',
        loadComponent: ()=> import('./pessoa/pessoa.component')
      },
      {
        path:'apartamento',
        loadComponent: ()=> import('./apartamento/apartamento.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
