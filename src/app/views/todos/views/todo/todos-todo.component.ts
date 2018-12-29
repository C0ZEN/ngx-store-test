import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { TodoInterface } from '../../../../stores/todos/todo.interface';
import { TodosQuery } from '../../../../stores/todos/todos.query';

@AutoUnsubscribe()
@Component({
  selector: 'app-todos-todo',
  templateUrl: './todos-todo.component.html',
  styleUrls: [ './todos-todo.component.scss' ]
})
export class TodosTodoComponent implements OnInit, OnDestroy {
  public todo: TodoInterface | undefined = undefined;

  private selectActiveTodo: Subscription | undefined = undefined;

  public constructor(
    private todosQuery: TodosQuery
  ) {
  }

  public ngOnInit(): void {
    this.selectActiveTodo = this.todosQuery.selectActive().subscribe((activeTodo: TodoInterface | undefined) => {
      this.todo = activeTodo;
    });
  }

  public ngOnDestroy(): void {
  }
}
