import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig
} from '@datorama/akita';
import { TrackerInterface } from '../../interfaces/tracker.interface';
import { TodoInterface } from './todo.interface';

export interface TodosState extends EntityState<TodoInterface>, ActiveState, TrackerInterface {
}

const initialState: TodosState = {
  active: null,
  currentTracker: 0
};

@StoreConfig({
  name: 'todos'
})
@Injectable({
  providedIn: 'root'
})
export class TodosStore extends EntityStore<TodosState, TodoInterface> {
  public constructor() {
    super(initialState);
  }
}
