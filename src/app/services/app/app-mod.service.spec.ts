import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  LoggerModule,
  NGXLogger
} from 'ngx-logger';
import { DevModService } from '../dev-mod/dev-mod.service';
import { AppModService } from './app-mod.service';
import { AppModsEnum } from './enums/app-mods.enum';

describe('AppModService:', () => {
  let appModService: AppModService;
  let logger: NGXLogger;
  let devModService: DevModService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

        // Third parties
        LoggerModule.forRoot(undefined)
      ]
    });
  }));

  beforeEach(() => {
    appModService = TestBed.get(AppModService);
    logger = TestBed.get(NGXLogger);
    devModService = TestBed.get(DevModService);
  });

  describe('check()', () => {
    let loggerDebugSpy: jasmine.Spy;
    let isDevModeSpy: jasmine.Spy;

    beforeEach(() => {
      loggerDebugSpy = spyOn(logger, 'debug').and.stub();
      isDevModeSpy = spyOn(devModService, 'isDevMod').and.stub();
    });

    it(`should call "debug" from "logger" when isDevMode return true with message "Application running on: ${AppModsEnum.DEVELOPMENT}"`, () => {
      isDevModeSpy.and.returnValue(true);

      appModService.check();

      expect(loggerDebugSpy).toHaveBeenCalledTimes(1);
      expect(loggerDebugSpy).toHaveBeenCalledWith(`Application running on: ${AppModsEnum.DEVELOPMENT}`);
    });

    it(`should call "debug" from "logger" when isDevMode return false with message "Application running on: ${AppModsEnum.PRODUCTION}"`, () => {
      isDevModeSpy.and.returnValue(false);

      appModService.check();

      expect(loggerDebugSpy).toHaveBeenCalledTimes(1);
      expect(loggerDebugSpy).toHaveBeenCalledWith(`Application running on: ${AppModsEnum.PRODUCTION}`);
    });
  });
});
