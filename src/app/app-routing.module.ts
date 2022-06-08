import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module')     // so carrega o modulo quando acesssar 'home'
      .then(m => m.HomeModule)  // 'm' é o modulo recebido
  },
  {
    path: 'animais', 
    loadChildren: () => import('./animais/animais.module')    
      .then(m => m.AnimaisModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
