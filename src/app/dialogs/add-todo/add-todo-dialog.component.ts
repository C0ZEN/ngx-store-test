import {
  Component,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormGroup
} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { isNil } from 'lodash';
import { TodoInterface } from '../../stores/todos/todo.interface';
import { TodosService } from '../../stores/todos/todos.service';
import { AddTodoDialogCloseDataInterface } from './interfaces/add-todo-dialog-close-data.interface';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: [ './add-todo-dialog.component.scss' ]
})
export class AddTodoDialogComponent implements OnInit {
  public todo: TodoInterface | undefined;

  public todoForm: FormGroup | undefined;

  public get name(): AbstractControl | null {
    if (!isNil(this.todoForm)) {
      return this.todoForm.get('name');
    }
    return null;
  }

  public constructor(
    private matDialogRef: MatDialogRef<AddTodoDialogComponent, AddTodoDialogCloseDataInterface>,
    private todosService: TodosService
  ) {
  }

  public ngOnInit(): void {
    this.todo = this.todosService.create();

    this.todoForm = new FormGroup({});
  }

  public addTodo(): void {
    this.matDialogRef.close({
      todo: this.todo
    });
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
