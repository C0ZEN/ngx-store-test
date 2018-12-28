import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Third parties
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

    // Internal
    TodoRoutingModule,
    ToolbarModule
  ]
})
export class TodoModule {
}
