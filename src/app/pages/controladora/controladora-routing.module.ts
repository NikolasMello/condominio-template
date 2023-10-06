import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/controladora/morador/entrada',
    pathMatch: 'full',
  },
  {
    path:'',
    children: [
      {
        path:'morador',
        loadChildren: ()=> import('./morador/morador.module').then((module)=> module.MoradorModule)
      },
      {
        path:'visitante',
        loadChildren: ()=> import('./visitante/visitante.module').then((module)=> module.VisitanteModule)
      },
      {
        path:'veiculo',
        loadChildren: ()=> import('./veiculo/veiculo.module').then((module)=> module.VeiculoModule)
      },
      {
        path:'funcionario',
        loadChildren: ()=> import('./funcionario/funcionario.module').then((module)=> module.FuncionarioModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControladoraRoutingModule { }
