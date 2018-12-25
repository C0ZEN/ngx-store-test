import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ToolbarModule
  ]
})
export class TodoModule {
}
