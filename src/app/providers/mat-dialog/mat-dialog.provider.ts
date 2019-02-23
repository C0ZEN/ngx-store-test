import { Provider } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

export const MatDialogProvider: Provider = {
  provide: MAT_DIALOG_DEFAULT_OPTIONS,
  useValue: {
    hasBackdrop: true,
    verticalPosition: 'top',
    horizontalPosition: 'center'
  }
};
