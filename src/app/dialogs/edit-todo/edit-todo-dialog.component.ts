import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  FormGroup
} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { TodoInputDescriptionComponent } from '../../components/todos/input-description/todo-input-description.component';
import { TodoInputNameComponent } from '../../components/todos/input-name/todo-input-name.component';
import { TodoInterface } from '../../stores/todos/todo.interface';
import { TodosQuery } from '../../stores/todos/todos.query';
import { EditTodoDialogCloseDataInterface } from './interfaces/edit-todo-dialog-close-data.interface';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: [ './edit-todo-dialog.component.scss' ]
})
export class EditTodoDialogComponent implements OnInit, AfterViewInit {
  public todo: TodoInterface | undefined;

  public todoForm: FormGroup | undefined;

  @ViewChild('todoInputName')
  public todoInputName: TodoInputNameComponent | undefined;

  @ViewChild('todoInputDescription')
  public todoInputDescription: TodoInputDescriptionComponent | undefined;

  public get name(): AbstractControl | null {
    if (!_.isNil(this.todoForm)) {
      return this.todoForm.get('name');
    }
    return null;
  }

  public constructor(
    private matDialogRef: MatDialogRef<EditTodoDialogComponent, EditTodoDialogCloseDataInterface>,
    private todosQuery: TodosQuery
  ) {
  }

  public ngOnInit(): void {
    this.todo = this.todosQuery.getActive();

    this.todoForm = new FormGroup({});
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      if (!_.isNil(this.todoForm)) {
        if (!_.isNil(this.todoInputName)) {
          this.todoForm.addControl('name', this.todoInputName.formControl);
          this.todoInputName.focus();
        }
        if (!_.isNil(this.todoInputDescription)) {
          this.todoForm.addControl('description', this.todoInputDescription.formControl);
        }
      }
    });
  }

  public editTodo(): void {
    if (!_.isNil(this.todoForm)) {
      this.matDialogRef.close({
        todo: {
          ...this.todo,
          ...this.todoForm.getRawValue()
        }
      });
    }
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
