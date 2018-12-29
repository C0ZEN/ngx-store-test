import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { TodosRoutingModule } from './todos-routing.module';

import { TodosComponent } from './todos.component';
import { TodosTodoModule } from './views/todo/todos-todo.module';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Third parties
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,

    // Internal
    TodosRoutingModule,
    ToolbarModule,

    // Children
    TodosTodoModule
  ]
})
export class TodosModule {
}
