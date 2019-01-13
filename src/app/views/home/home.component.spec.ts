import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  MatIconModule,
  MatListModule
} from '@angular/material';
import { HomeConfigurationCategories } from './data/home-configuration-categories.data';
import { HomeFeaturesCategories } from './data/home-features-categories.data';

import { HomeComponent } from './home.component';

describe('HomeComponent:', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [

        // Third parties
        MatListModule,
        MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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

    it('should have a property "configurationCategories" which is equal to const "HomeConfigurationCategories"', () => {
      expect(component.configurationCategories).toEqual(HomeConfigurationCategories);
    });

    it('should have a property "featuresCategories" which is equal to const "HomeFeaturesCategories"', () => {
      expect(component.featuresCategories).toEqual(HomeFeaturesCategories);
    });
  });
});
