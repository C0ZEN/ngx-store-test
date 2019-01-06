import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import * as _ from 'lodash';
import { NGXLogger } from 'ngx-logger';
import { TodosQuery } from '../../../../../stores/todos/todos.query';
import { TodosService } from '../../../../../stores/todos/todos.service';

@Injectable({
  providedIn: 'root'
})
export class TodosTodoExistGuard implements CanActivate {
  public constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private logger: NGXLogger
  ) {
  }

  public canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): boolean {
    const todoId: string | null = activatedRouteSnapshot.paramMap.get('todoId');
    if (_.isString(todoId) && !_.isEmpty(todoId)) {
      const isTodoExist: boolean = this.todosQuery.hasEntity(todoId);
      if (isTodoExist) {
        return true;
      }
      this.error(`could not find any todo with id "${todoId}"`);
      return false;
    }
    this.error(`parameter "todoId" is empty`);
    return false;
  }

  private error(message: string): void {
    this.logger.error(`TodosTodoGuard: ${message}`);
  }
}
