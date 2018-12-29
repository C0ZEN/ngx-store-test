import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from '@angular/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { TodoInterface } from '../../stores/todos/todo.interface';
import { TodosQuery } from '../../stores/todos/todos.query';
import { TodosService } from '../../stores/todos/todos.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ]
})
export class TodosComponent implements OnInit, OnDestroy {
  public todos: TodoInterface[] = [];
  public currentUrl: string | undefined = undefined;

  private selectAllTodos: Subscription | undefined = undefined;
  private routerEvents: Subscription | undefined = undefined;

  public constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {

    // Always sync with the complete list of todos
    this.selectAllTodos = this.todosQuery.selectAll().subscribe((allTodos: TodoInterface[]) => {
      this.todos = allTodos;
    });

    // Update the current url when the navigation occur in the todos views
    this.routerEvents = this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        this.currentUrl = routerEvent.url;
      }
    });

    // Get the current router url the first time this component is created
    this.currentUrl = this.router.url;
  }

  public ngOnDestroy(): void {
  }

  public newTodo(): void {
    const todo: TodoInterface = this.todosService.add();

    this.router.navigate([
      'todo',
      todo.id
    ], {
      relativeTo: this.activatedRoute
    });
  }
}
