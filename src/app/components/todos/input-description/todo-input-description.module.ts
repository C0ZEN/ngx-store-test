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

import { TodoInputDescriptionComponent } from './todo-input-description.component';

@NgModule({
  declarations: [
    TodoInputDescriptionComponent
  ],
  exports: [
    TodoInputDescriptionComponent
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
export class TodoInputDescriptionModule {
}
