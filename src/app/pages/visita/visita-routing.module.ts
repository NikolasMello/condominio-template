import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/visita/visitantes',
    pathMatch: 'full',
  },
  {
    path:'',
    children: [
      {
        path:'visitantes',
        loadComponent: ()=> import('./visitantes/visitantes.component')
      },
      {
        path:'auditoria-visitantes',
        loadComponent: ()=> import('./auditoria-visitante/auditoria-visitante.component')
      },
      {
        path:'bloqueados',
        loadComponent: ()=> import('./bloqueados/bloqueados.component')
      },
      {
        path:'entrada-saida',
        loadComponent: ()=> import('./controle-entrada-saida/controle-entrada-saida.component')
      },
      {
        path:'acoes-visitantes',
        loadComponent: ()=> import('./acoes-visitante/acoes-visitante.component')
      },
      {
        path:'avaliacao-visitantes',
        loadComponent: ()=> import('./avaliacao-visitante/avaliacao-visitante.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
