import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  getInitialActiveState,
  StoreConfig
} from '@datorama/akita';
import { TodoInterface } from './todo.interface';

export interface TodosState extends EntityState<TodoInterface>, ActiveState {
}

const initialState = {
  ...getInitialActiveState()
};

@StoreConfig({ name: 'todos' })
@Injectable({
  providedIn: 'root'
})
export class TodosStore extends EntityStore<TodosState, TodoInterface> {
  public constructor() {
    super(initialState);
  }
}
