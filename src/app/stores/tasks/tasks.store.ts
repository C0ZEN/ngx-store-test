import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig
} from '@datorama/akita';
import { TaskInterface } from './task.interface';

export interface TasksState extends EntityState<TaskInterface>, ActiveState {
}

const initialState: TasksState = {
  active: null
};

@StoreConfig({
  name: 'tasks'
})
@Injectable({
  providedIn: 'root'
})
export class TasksStore extends EntityStore<TasksState, TaskInterface> {
  public constructor() {
    super(initialState);
  }
}
