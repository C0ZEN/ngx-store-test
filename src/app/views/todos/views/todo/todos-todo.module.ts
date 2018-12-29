import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { TodosTodoComponent } from './todos-todo.component';

@NgModule({
  declarations: [
    TodosTodoComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Third parties
    MatCardModule
  ]
})
export class TodosTodoModule {
}
