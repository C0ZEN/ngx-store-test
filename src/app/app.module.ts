import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  ErrorStateMatcher,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  LoggerModule,
  NgxLoggerLevel
} from 'ngx-logger';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppDevModule } from './app.dev.module';
import { AppProdModule } from './app.prod.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { DialogsModule } from './dialogs/dialogs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // Angular
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // Third parties specific to the project mod
    environment.production ? AppProdModule : AppDevModule,

    // Third parties
    LoggerModule.forRoot({
      disableConsoleLogging: false,
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.OFF
    }),

    // Internal
    NavbarModule,
    DialogsModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: <MatSnackBarConfig>{
        duration: 4000
      }
    },
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
