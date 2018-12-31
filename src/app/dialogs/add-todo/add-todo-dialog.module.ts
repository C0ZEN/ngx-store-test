import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { TodoInputNameModule } from '../../components/todos/input-name/todo-input-name.module';

import { AddTodoDialogComponent } from './add-todo-dialog.component';

@NgModule({
  declarations: [
    AddTodoDialogComponent
  ],
  exports: [
    AddTodoDialogComponent
  ],
  entryComponents: [
    AddTodoDialogComponent
  ],
  imports: [

    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Third parties
    MatButtonModule,

    // Internal
    TodoInputNameModule
  ]
})
export class AddTodoDialogModule {
}
