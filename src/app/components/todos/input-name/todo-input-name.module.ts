import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { TodoInputNameComponent } from './todo-input-name.component';

@NgModule({
  declarations: [
    TodoInputNameComponent
  ],
  exports: [
    TodoInputNameComponent
  ],
  imports: [

    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Third parties
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TodoInputNameModule {
}
