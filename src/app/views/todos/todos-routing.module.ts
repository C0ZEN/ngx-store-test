import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodosTodoExistGuard } from './views/todo/guards/todos-todo-exist.guard';
import { TodosTodoActiveResolver } from './views/todo/resolvers/todos-todo-active.resolver';
import { TodosTodoComponent } from './views/todo/todos-todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: 'todo/:todoId',
        component: TodosTodoComponent,
        canActivate: [
          TodosTodoExistGuard
        ],
        resolve: {
          todo: TodosTodoActiveResolver
        }
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
