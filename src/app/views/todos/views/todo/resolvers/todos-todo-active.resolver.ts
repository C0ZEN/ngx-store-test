import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve
} from '@angular/router';
import {
  isEmpty,
  isString
} from 'lodash';
import { TodosService } from '../../../../../stores/todos/todos.service';

@Injectable({
  providedIn: 'root'
})
export class TodosTodoActiveResolver implements Resolve<void> {
  public constructor(
    private todosService: TodosService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): void {
    const todoId: string | null = route.paramMap.get('todoId');
    if (isString(todoId) && !isEmpty(todoId)) {
      this.todosService.activate(todoId);
    }
  }
}
