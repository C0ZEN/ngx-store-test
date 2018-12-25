import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}
