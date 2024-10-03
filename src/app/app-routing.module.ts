import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HipervinculosComponent } from './hipervinculos/hipervinculos.component';
import { Hipervinculos2Component } from './hipervinculos2/hipervinculos2.component';
import { Hipervinculos3Component } from './hipervinculos3/hipervinculos3.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hipervinculos',
    component: HipervinculosComponent
  },
  {
    path: 'hipervinculos2',
    component: Hipervinculos2Component
  },
  {
    path: 'hipervinculos3',
    component: Hipervinculos3Component
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
