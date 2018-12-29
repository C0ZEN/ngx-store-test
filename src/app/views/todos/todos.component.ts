import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { TodoInterface } from '../../stores/todos/todo.interface';
import { TodosQuery } from '../../stores/todos/todos.query';
import { TodosService } from '../../stores/todos/todos.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ]
})
export class TodosComponent implements OnInit, OnDestroy {
  public todos: TodoInterface[] = [];

  private selectAllTodos: Subscription | undefined = undefined;

  public constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery
  ) {
  }

  public ngOnInit(): void {
    this.selectAllTodos = this.todosQuery.selectAll().subscribe((allTodos: TodoInterface[]) => {
      this.todos = allTodos;
    });
  }

  public ngOnDestroy(): void {
  }

  public newTodo(): void {
    this.todosService.add();
  }
}
