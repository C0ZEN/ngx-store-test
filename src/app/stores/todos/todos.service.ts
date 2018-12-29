import { Injectable } from '@angular/core';
import {
  applyTransaction,
  guid
} from '@datorama/akita';
import { NGXLogger } from 'ngx-logger';
import { TodoInterface } from './todo.interface';
import { TodosQuery } from './todos.query';
import { TodosStore } from './todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public constructor(
    private todosStore: TodosStore,
    private todosQuery: TodosQuery,
    private logger: NGXLogger
  ) {
  }

  // Create a new todo
  // Add it to the store
  // Log
  public add(): void {
    applyTransaction(() => {
      const todo: TodoInterface = this.createTodo();

      this.todosStore.add(todo);
      this.info(`todo ${todo.id} added`);
    });
  }

  // Print info log
  private info(message: string): void {
    this.logger.info(`TodosService: ${message}`);
  }

  // Increment the tracker
  // Create a new todo item
  private createTodo(): TodoInterface {
    this.incrementTracker();
    return {
      id: guid(),
      name: `Todo list ${this.todosQuery.getSnapshot().currentTracker}`,
      description: undefined,
      creationDate: new Date().toISOString(),
      updateDate: undefined,
      tasks: []
    };
  }

  // Increment the current state tracker
  // Log
  private incrementTracker(): void {
    this.todosStore.updateRoot(state => {
      return {
        currentTracker: state.currentTracker + 1
      };
    });
    this.info(`new tracker set to ${this.todosQuery.getSnapshot().currentTracker}`);
  }
}
