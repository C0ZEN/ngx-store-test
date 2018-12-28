import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ErrorComponent } from './error.component';
import { ErrorViewNotFoundComponent } from './views/view-not-found/error-view-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: 'view-not-found',
        component: ErrorViewNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorRoutingModule {
}
