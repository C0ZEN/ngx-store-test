import {
  Component,
  OnInit
} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RemoveAllTodosDialogCloseDataInterface } from './interfaces/remove-all-todos-dialog-close-data.interface';

@Component({
  selector: 'app-remove-all-todos-dialog',
  templateUrl: './remove-all-todos-dialog.component.html',
  styleUrls: [
    './remove-all-todos-dialog.component.scss'
  ]
})
export class RemoveAllTodosDialogComponent implements OnInit {
  public constructor(
    private matDialogRef: MatDialogRef<RemoveAllTodosDialogComponent, RemoveAllTodosDialogCloseDataInterface>
  ) {
  }

  public ngOnInit(): void {
  }

  public removeAllTodos(): void {
    this.matDialogRef.close({
      confirmRemove: true
    });
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
