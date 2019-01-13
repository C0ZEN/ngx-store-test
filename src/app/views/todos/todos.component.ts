import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatSnackBar,
} from '@angular/material';
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from '@angular/router';
import * as _ from 'lodash';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { AddTodoDialogComponent } from '../../dialogs/add-todo/add-todo-dialog.component';
import { AddTodoDialogCloseDataInterface } from '../../dialogs/add-todo/interfaces/add-todo-dialog-close-data.interface';
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

  private selectAllTodosSubscription: Subscription | undefined;
  private routerEventsSubscription: Subscription | undefined;

  private removeAllTodosDialog: MatDialogRef<RemoveAllTodosDialogComponent, RemoveAllTodosDialogCloseDataInterface> | undefined;
  private addTodoDialog: MatDialogRef<AddTodoDialogComponent, AddTodoDialogCloseDataInterface> | undefined;

  public constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {
  }

  public ngOnInit(): void {
    this.selectAllTodosSubscription = this.todosQuery.selectAll().subscribe((allTodos: TodoInterface[]) => {
      this.todos = allTodos;
    });

    this.routerEventsSubscription = this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        this.currentUrl = routerEvent.url;
      }
    });

    this.currentUrl = this.router.url;
  }

  public ngOnDestroy(): void {
  }

  public addTodo(): void {
    this.addTodoDialog = this.matDialog.open(AddTodoDialogComponent);

    this.addTodoDialog.afterClosed().subscribe((value: AddTodoDialogCloseDataInterface | undefined) => {
      if (!_.isNil(value) && !_.isNil(value.todo)) {
        this.todosService.add(value.todo);
        this.router.navigate([
          'todo',
          value.todo.id
        ], {
          relativeTo: this.activatedRoute
        });
        this.matSnackBar.open('New todo added');
      } else {
        this.todosService.cancelCreate();
      }
    });
  }

  public removeAllTodos(): void {
    this.removeAllTodosDialog = this.matDialog.open(RemoveAllTodosDialogComponent);

    this.removeAllTodosDialog.afterClosed().subscribe((value: RemoveAllTodosDialogCloseDataInterface | undefined) => {
      if (!_.isNil(value) && value.confirmRemove) {
        this.todosService.reset();
        this.matSnackBar.open('All todos removed');
      }
    });
  }
}
