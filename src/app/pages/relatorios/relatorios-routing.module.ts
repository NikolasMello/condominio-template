import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/relatorios/cadastros/pessoa',
    pathMatch: 'full',
  },
  {
    path:'',
    children: [
      {
        path:'cadastros',
        loadChildren: ()=> import('./cadastros/cadastros.module').then((module)=> module.CadastrosModule)
      },
      {
        path:'acessos',
        loadChildren: ()=> import('./acessos/acessos.module').then((module)=> module.AcessosModule)
      },
      {
        path:'registros',
        loadChildren: ()=> import('./registros/registros.module').then((module)=> module.RegistrosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
