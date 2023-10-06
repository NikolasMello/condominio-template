import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/acoes/chat-moradores',
    pathMatch: 'full',
  },
  {
    path:'chat-moradores',
    loadComponent: ()=> import('./chat-moradores/chat-moradores.component')
  },
  {
    path:'avaliacao',
    loadComponent: ()=> import('./avaliacao/avaliacao.component')
  },
  {
    path:'registro-entrada',
    loadComponent: ()=> import('./registro-entrada/registro-entrada.component')
  },
  {
    path:'registro-saida',
    loadComponent: ()=> import('./registro-saida/registro-saida.component')
  },
  {
    path:'solicitacoes-bloqueio',
    loadComponent: ()=> import('./solicitacao-bloqueio/solicitacao-bloqueio.component')
  },
  {
    path:'solicitacao-servicos',
    loadComponent: ()=> import('./solicitacao-servicos/solicitacao-servicos.component')
  },
  {
    path:'reiniciar-sistema',
    loadComponent: ()=> import('./reiniciar-sistema/reiniciar-sistema.component')
  },
  {
    path:'alteracao-cadastro',
    loadComponent: ()=> import('./alteracao-de-cadastro/alteracao-de-cadastro.component')
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcoesRoutingModule { }
