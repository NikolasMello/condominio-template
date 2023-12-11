import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationMenuComponent } from './theme/navigation-menu/navigation-menu.component';
import { CleanLayoutComponent } from './theme/clean-layout/clean-layout.component';
import { AcessosModule } from './pages/relatorios/acessos/acessos.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'',
    component: NavigationMenuComponent,
    children:[
      {
        path:'home',
        loadChildren: ()=> import('./pages/home/home.module').then((module) => module.HomeModule)
      },
      {
        path:'cadastro',
        loadChildren: ()=> import('./pages/cadastro/cadastro.module').then((module)=> module.CadastroModule)
      },
      {
        path:'acoes',
        loadChildren: ()=> import('./pages/acoes/acoes.module').then((module)=> module.AcoesModule)
      },
      {
        path:'controladora',
        loadChildren: ()=> import('./pages/controladora/controladora.module').then((module) => module.ControladoraModule)
      },
      {
        path:'visita',
        loadChildren: ()=> import('./pages/visita/visita.module').then((module) => module.VisitaModule)
      },
      {
        path:'relatorios',
        loadChildren: ()=> import('./pages/relatorios/relatorios.module').then((module) => module.RelatoriosModule)
      }
    ]   
  },
  {
    path:'',
    component: CleanLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: ()=> import('./pages/user/user.module').then((module) => module.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
