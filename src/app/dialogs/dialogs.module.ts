import { NgModule } from '@angular/core';
import { AddTodoDialogModule } from './add-todo/add-todo-dialog.module';

import { RemoveAllTodosDialogModule } from './remove-all-todos/remove-all-todos-dialog.module';

@NgModule({
  imports: [

    // Internal
    RemoveAllTodosDialogModule,
    AddTodoDialogModule
  ]
})
export class DialogsModule {
}