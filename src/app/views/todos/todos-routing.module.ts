import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodosTodoComponent } from './views/todo/todos-todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: 'todo/:todoId',
        component: TodosTodoComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule {
}
