import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material';
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from '@angular/router';
import { isNil } from 'lodash';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { RemoveAllTodosDialogCloseDataInterface } from '../../dialogs/remove-all-todos/interfaces/remove-all-todos-dialog-close-data.interface';
import { RemoveAllTodosDialogComponent } from '../../dialogs/remove-all-todos/remove-all-todos-dialog.component';
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
  public currentUrl: string | undefined;

  private selectAllTodos: Subscription | undefined;
  private routerEvents: Subscription | undefined;

  private removeAllTodosDialog: MatDialogRef<RemoveAllTodosDialogComponent, RemoveAllTodosDialogCloseDataInterface> | undefined;

  public constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
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

  public removeAllTodos(): void {
    this.removeAllTodosDialog = this.matDialog.open(RemoveAllTodosDialogComponent);
    this.removeAllTodosDialog.afterClosed().subscribe((value: RemoveAllTodosDialogCloseDataInterface | undefined) => {
      if (!isNil(value) && value.confirmRemove) {
        this.todosService.reset();
      }
    });
  }
}
