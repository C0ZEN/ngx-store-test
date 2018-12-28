import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path: 'todo',
    loadChildren: './views/todo/todo.module#TodoModule'
  },
  {
    path: 'error',
    loadChildren: './views/error/error.module#ErrorModule'
  },
  {
    path: '**',
    redirectTo: '/error/view-not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
