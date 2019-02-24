import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ImagesComponent } from './images.component';
import { ImagesBlurUpComponent } from './views/blur-up/images-blur-up.component';

const routes: Routes = [
  {
    path: '',
    component: ImagesComponent,
    children: [
      {
        path: 'blur-up',
        component: ImagesBlurUpComponent
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
export class ImagesRoutingModule {
}
