import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatSnackBar
} from '@angular/material';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import { isNil } from 'lodash';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { EditTodoDialogComponent } from '../../../../dialogs/edit-todo/edit-todo-dialog.component';
import { EditTodoDialogCloseDataInterface } from '../../../../dialogs/edit-todo/interfaces/edit-todo-dialog-close-data.interface';
import { TodoInterface } from '../../../../stores/todos/todo.interface';
import { TodosQuery } from '../../../../stores/todos/todos.query';
import { TodosService } from '../../../../stores/todos/todos.service';

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

  private editTodoDialog: MatDialogRef<EditTodoDialogComponent, EditTodoDialogCloseDataInterface> | undefined;

  public constructor(
    private todosQuery: TodosQuery,
    private router: Router,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private todosService: TodosService
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

  public addTask(): void {

  }

  public editTodo(): void {
    this.editTodoDialog = this.matDialog.open(EditTodoDialogComponent);
    this.editTodoDialog.afterClosed().subscribe((value: EditTodoDialogCloseDataInterface | undefined) => {
      if (!isNil(value) && !isNil(value.todo)) {
        this.todosService.edit(value.todo);
        this.matSnackBar.open('Todo edited');
      }
    });
  }
}
