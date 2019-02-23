import { Provider } from '@angular/core';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig
} from '@angular/material';

export const MatSnackBarProvider: Provider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: <MatSnackBarConfig>{
    duration: 4000
  }
};
