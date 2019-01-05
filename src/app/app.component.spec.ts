import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerModule } from 'ngx-logger';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { AppModService } from './services/app/app-mod.service';
import { MaterialIconsService } from './services/icons/material-icons.service';

describe('AppComponent:', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let materialIconsService: MaterialIconsService;
  let appModService: AppModService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [

        // Angular
        RouterTestingModule,

        // Third parties
        LoggerModule.forRoot(undefined),

        // Internal
        NavbarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    materialIconsService = TestBed.get(MaterialIconsService);
    appModService = TestBed.get(AppModService);
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

    describe('ngOnInit()', () => {
      it('should call "fetchIcons" from "materialIconsService" to load all SVG icons', () => {
        spyOn(materialIconsService, 'fetchIcons').and.stub();

        component.ngOnInit();

        expect(materialIconsService.fetchIcons).toHaveBeenCalledTimes(1);
      });

      it('should call "check" from "appModService" to check in what mod the app is', () => {
        spyOn(appModService, 'check').and.stub();

        component.ngOnInit();

        expect(appModService.check).toHaveBeenCalledTimes(1);
      });
    });

    describe('ngOnDestroy()', () => {
      it('should call "getElementsByClassName" from "document" to get all "cdk-overlay-container" classes', () => {
        spyOn(document, 'getElementsByClassName').and.stub();

        component.ngOnDestroy();

        expect(document.getElementsByClassName).toHaveBeenCalledTimes(1);
        expect(document.getElementsByClassName).toHaveBeenCalledWith('cdk-overlay-container');
      });

      it('should empty "innerHTML" of each "cdk-overlay-container" elements fetched', () => {
        const elements = [
          {
            innerHTML: 'dummy1'
          },
          {
            innerHTML: 'dummy2'
          }
        ];
        spyOn(document, 'getElementsByClassName').and.returnValue(elements);

        component.ngOnDestroy();

        expect(elements[0].innerHTML).toBe('');
        expect(elements[1].innerHTML).toBe('');
      });
    });
  });
});
