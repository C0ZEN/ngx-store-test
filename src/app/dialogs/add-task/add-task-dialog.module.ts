import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { TaskInputDescriptionModule } from '../../components/tasks/input-description/task-input-description.module';
import { TaskInputNameModule } from '../../components/tasks/input-name/task-input-name.module';

import { AddTaskDialogComponent } from './add-task-dialog.component';

@NgModule({
  declarations: [
    AddTaskDialogComponent
  ],
  exports: [
    AddTaskDialogComponent
  ],
  entryComponents: [
    AddTaskDialogComponent
  ],
  imports: [

    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Third parties
    MatButtonModule,

    // Internal
    TaskInputNameModule,
    TaskInputDescriptionModule
  ]
})
export class AddTaskDialogModule {
}
