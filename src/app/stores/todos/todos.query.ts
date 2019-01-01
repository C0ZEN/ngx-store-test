import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoInterface } from './todo.interface';
import {
  TodosState,
  TodosStore
} from './todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState, TodoInterface> {
  public constructor(
    protected todosStore: TodosStore
  ) {
    super(todosStore);
  }
}
