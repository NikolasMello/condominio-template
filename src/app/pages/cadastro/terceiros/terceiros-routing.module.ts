import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'pessoa-fisica',
        loadComponent: ()=> import('./pessoafisica/pessoafisica.component')
      },
      {
        path:'empresa',
        loadComponent: ()=> import('./empresa/empresa.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerceirosRoutingModule { }
