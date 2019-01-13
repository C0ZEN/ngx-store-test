import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarLinks } from './data/navbar-links.data';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent:', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
      imports: [

        // Angular
        RouterTestingModule,

        // Third parties
        MatToolbarModule,
        MatTabsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
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

    it('should have a property "links" which is equal to const "NavbarLinks"', () => {
      expect(component.links).toEqual(NavbarLinks);
    });
  });
});
