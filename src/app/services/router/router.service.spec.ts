import {
  async,
  TestBed
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterService } from './router.service';

describe('RouterService:', () => {
  let service: RouterService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

        // Angular
        RouterTestingModule
      ]
    });
  }));

  beforeEach(() => {
    service = TestBed.get(RouterService);
    router = TestBed.get(Router);
  });
});
