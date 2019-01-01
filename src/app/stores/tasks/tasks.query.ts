import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TaskInterface } from './task.interface';
import {
  TasksState,
  TasksStore
} from './tasks.store';

@Injectable({
  providedIn: 'root'
})
export class TasksQuery extends QueryEntity<TasksState, TaskInterface> {
  public constructor(
    protected tasksStore: TasksStore
  ) {
    super(tasksStore);
  }
}
