import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { NGXLogger } from 'ngx-logger';
import { TodosQuery } from '../todos/todos.query';
import { TaskInterface } from './task.interface';
import { TasksQuery } from './tasks.query';
import { TasksStore } from './tasks.store';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public constructor(
    private tasksStore: TasksStore,
    private tasksQuery: TasksQuery,
    private logger: NGXLogger,
    private todosQuery: TodosQuery
  ) {
  }

  /**
   * Add task
   */
  public add(task: TaskInterface): void {
    this.tasksStore.add(task);
    this.info(`task "${task.id}" added`);
  }

  /**
   * Reset all the data
   */
  public reset(): void {
    this.tasksStore.reset();
    this.info(`tasks store reset`);
  }

  /**
   * Create a new task item
   */
  public create(): TaskInterface {
    return {
      id: guid(),
      name: `New task`,
      description: undefined,
      creationDate: new Date().toISOString(),
      updateDate: undefined,
      todoId: this.todosQuery.getActive().id
    };
  }

  /**
   * Edit a task
   */
  public edit(task: TaskInterface): void {
    task.updateDate = new Date().toISOString();
    this.tasksStore.update(task.id, task);
    this.info(`task "${task.id}" edited`);
  }

  /**
   * Print info log
   */
  private info(message: string): void {
    this.logger.info(`TasksService: ${message}`);
  }
}
