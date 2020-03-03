import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SomeComponent} from './some/some/some.component';


const routes: Routes = [
  { path: '', component: SomeComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
