import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'morador',
        loadComponent: ()=> import('./morador/morador.component')
      },
      {
        path:'funcionarios',
        loadComponent: ()=> import('./funcionarios/funcionarios.component')
      },
      {
        path:'perfil',
        loadComponent: ()=> import('./perfil/perfil.component')
      },
      {
        path:'veiculo',
        loadComponent: ()=> import('./veiculo/veiculo.component')
      },
      {
        path:'visitante',
        loadComponent: ()=> import('./visitante/visitante.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
