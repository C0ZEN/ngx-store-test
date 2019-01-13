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
import { TaskInputDescriptionComponent } from '../../components/tasks/input-description/task-input-description.component';
import { TaskInputNameComponent } from '../../components/tasks/input-name/task-input-name.component';
import { TaskInterface } from '../../stores/tasks/task.interface';
import { TasksService } from '../../stores/tasks/tasks.service';
import { AddTaskDialogCloseDataInterface } from './interfaces/add-task-dialog-close-data.interface';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: [ './add-task-dialog.component.scss' ]
})
export class AddTaskDialogComponent implements OnInit, AfterViewInit {
  public task: TaskInterface | undefined;
  public taskForm: FormGroup | undefined;

  @ViewChild('taskInputName')
  public taskInputName: TaskInputNameComponent | undefined;

  @ViewChild('taskInputDescription')
  public taskInputDescription: TaskInputDescriptionComponent | undefined;

  public get name(): AbstractControl | null {
    if (!_.isNil(this.taskForm)) {
      return this.taskForm.get('name');
    }
    return null;
  }

  public constructor(
    private matDialogRef: MatDialogRef<AddTaskDialogComponent, AddTaskDialogCloseDataInterface>,
    private tasksService: TasksService
  ) {
  }

  public ngOnInit(): void {
    this.task = this.tasksService.create();

    this.taskForm = new FormGroup({});
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      if (!_.isNil(this.taskForm)) {
        if (!_.isNil(this.taskInputName)) {
          this.taskForm.addControl('name', this.taskInputName.formControl);
          this.taskInputName.focus();
        }
        if (!_.isNil(this.taskInputDescription)) {
          this.taskForm.addControl('description', this.taskInputDescription.formControl);
        }
      }
    });
  }

  public addTask(): void {
    if (!_.isNil(this.taskForm)) {
      this.matDialogRef.close({
        task: {
          ...this.task,
          ...this.taskForm.getRawValue()
        }
      });
    }
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
