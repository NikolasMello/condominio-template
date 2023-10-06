import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cadastro/pessoa/morador',
    pathMatch: 'full',
  },
  {
    path:'pessoa',
    loadChildren: ()=> import('./pessoa/pessoa.module').then((module) => module.PessoaModule)
  },
  {
    path:'apartamento',
    loadChildren: ()=> import('./apartamento/apartamento.module').then((module) => module.ApartamentoModule)
  },
  {
    path:'terceiros',
    loadChildren: ()=> import('./terceiros/terceiros.module').then((module) => module.TerceirosModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
