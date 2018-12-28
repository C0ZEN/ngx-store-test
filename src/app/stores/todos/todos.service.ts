import { Injectable } from '@angular/core';
import { TodosQuery } from './todos.query';
import { TodosStore } from './todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public constructor(
    private todosStore: TodosStore,
    private todosQuery: TodosQuery
  ) {
    this.todosStore.set([]);
  }
}
