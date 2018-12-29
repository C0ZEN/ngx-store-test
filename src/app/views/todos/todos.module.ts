import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { TodosRoutingModule } from './todos-routing.module';

import { TodosComponent } from './todos.component';

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

    // Internal
    TodosRoutingModule,
    ToolbarModule
  ]
})
export class TodosModule {
}
