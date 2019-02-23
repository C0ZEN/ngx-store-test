import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerModule } from 'ngx-logger';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { ImagesComponent } from './images.component';

describe('ImagesComponent:', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImagesComponent
      ],
      imports: [

        // Angular
        RouterTestingModule,

        // Third parties
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatTabsModule,
        MatDialogModule,
        MatSnackBarModule,
        LoggerModule.forRoot(undefined),

        // Internal
        ToolbarModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
  });

  describe('before init', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('after init', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
  });
});
