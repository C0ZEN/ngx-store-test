import { Provider } from '@angular/core';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';

export const ErrorStateMatcherProvider: Provider = {
  provide: ErrorStateMatcher,
  useClass: ShowOnDirtyErrorStateMatcher
};
