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
import { TodosService } from '../../stores/todos/todos.service';
import { AddTodoDialogCloseDataInterface } from './interfaces/add-todo-dialog-close-data.interface';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: [ './add-todo-dialog.component.scss' ]
})
export class AddTodoDialogComponent implements OnInit, AfterViewInit {
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
    private matDialogRef: MatDialogRef<AddTodoDialogComponent, AddTodoDialogCloseDataInterface>,
    private todosService: TodosService
  ) {
  }

  public ngOnInit(): void {
    this.todo = this.todosService.create();

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

  public addTodo(): void {
    if (!_.isNil(this.todoForm)) {
      this.matDialogRef.close({
        todo: _.merge({}, this.todo, this.todoForm.getRawValue())
      });
    }
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
