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

  /**
   * Create a new todo
   * Add it to the store
   */
  public add(todo: TodoInterface): void {
    this.todosStore.add(todo);
    this.info(`todo "${todo.id}" added`);
  }

  /**
   * Activate a todo by id
   */
  public activate(id: string): void {
    this.todosStore.setActive(id);
    this.info(`todo "${id}" activated`);
  }

  /**
   * Create a new todo
   * Add it to the store
   * Activate it
   */
  public addAndActivate(todo: TodoInterface): void {
    applyTransaction(() => {
      this.todosStore.add(todo);
      this.todosStore.setActive(todo.id);
      this.info(`todo "${todo.id}" added`);
    });
  }

  /**
   * Reset all the data
   */
  public reset(): void {
    this.todosStore.reset();
    this.info(`todos store reset`);
  }

  /**
   * Increment the tracker
   * Create a new todo item
   */
  public create(): TodoInterface {
    this.incrementTracker();
    const id: string = guid();
    return {
      id: id,
      name: `Todo list ${this.todosQuery.getSnapshot().currentTracker}`,
      description: undefined,
      creationDate: new Date().toISOString(),
      updateDate: undefined,
      avatarUrl: `https://api.adorable.io/avatars/40/${id}.png`
    };
  }

  /**
   * Undo a creation of todo
   * Decrement the current tracker
   */
  public cancelCreate(): void {
    this.decrementTracker();
  }

  /**
   * Edit a todo
   */
  public edit(todo: TodoInterface): void {
    this.todosStore.updateActive(todo);
    this.info(`todo "${todo.id}" edited`);
  }

  /**
   * Print info log
   */
  private info(message: string): void {
    this.logger.info(`TodosService: ${message}`);
  }

  /**
   * Increment the current state tracker
   */
  private incrementTracker(): void {
    this.todosStore.updateRoot(state => {
      return {
        currentTracker: state.currentTracker + 1
      };
    });
    this.info(`new tracker increase to "${this.todosQuery.getSnapshot().currentTracker}"`);
  }

  /**
   * Decrement the current state tracker
   */
  private decrementTracker(): void {
    this.todosStore.updateRoot(state => {
      return {
        currentTracker: state.currentTracker - 1
      };
    });
    this.info(`new tracker decrease to "${this.todosQuery.getSnapshot().currentTracker}"`);
  }
}
