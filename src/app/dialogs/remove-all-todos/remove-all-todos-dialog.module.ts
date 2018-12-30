import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

import { RemoveAllTodosDialogComponent } from './remove-all-todos-dialog.component';

@NgModule({
  declarations: [
    RemoveAllTodosDialogComponent
  ],
  exports: [
    RemoveAllTodosDialogComponent
  ],
  entryComponents: [
    RemoveAllTodosDialogComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Third parties
    MatButtonModule
  ]
})
export class RemoveAllTodosDialogModule {
}
