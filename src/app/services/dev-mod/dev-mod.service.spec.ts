import { TestBed } from '@angular/core/testing';
import { DevModService } from './dev-mod.service';

describe('DevModService:', () => {
  let devModService: DevModService;

  beforeEach(() => {
    devModService = TestBed.get(DevModService);
  });

  describe('isDevMod()', () => {
    it('should return true', () => {

      const isDevMod = devModService.isDevMod();

      expect(isDevMod).toBe(true);
    });
  });
});
