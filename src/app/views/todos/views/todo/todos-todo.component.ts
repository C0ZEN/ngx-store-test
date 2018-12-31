import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { TodoInterface } from '../../../../stores/todos/todo.interface';
import { TodosQuery } from '../../../../stores/todos/todos.query';

@AutoUnsubscribe()
@Component({
  selector: 'app-todos-todo',
  templateUrl: './todos-todo.component.html',
  styleUrls: [ './todos-todo.component.scss' ]
})
export class TodosTodoComponent implements OnInit, OnDestroy {
  public todo: TodoInterface | undefined;
  public isAvatarLoaded: boolean = false;

  private selectActiveTodo: Subscription | undefined;
  private routerEvents: Subscription | undefined;

  public constructor(
    private todosQuery: TodosQuery,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.selectActiveTodo = this.todosQuery.selectActive().subscribe((activeTodo: TodoInterface | undefined) => {
      this.todo = activeTodo;
    });
    this.routerEvents = this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        this.isAvatarLoaded = false;
      }
    });
  }

  public ngOnDestroy(): void {
  }

  public onAvatarLoad(): void {
    this.isAvatarLoaded = true;
  }
}
