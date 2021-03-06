import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
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
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TodoInputNameModule {
}
