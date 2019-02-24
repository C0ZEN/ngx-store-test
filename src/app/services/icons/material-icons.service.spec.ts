import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MaterialIcons } from './data/material-icons.data';
import { MaterialIconsMock } from './data/material-icons.data.mock';
import { MaterialIconsIconInterface } from './interfaces/material-icons-icon.interface';
import { MaterialIconsService } from './material-icons.service';

describe('MaterialIconsService:', () => {
  let materialIconsService: MaterialIconsService;
  let matIconRegistry: MatIconRegistry;
  let domSanitizer: DomSanitizer;

  beforeEach(() => {
    materialIconsService = TestBed.get(MaterialIconsService);
    matIconRegistry = TestBed.get(MatIconRegistry);
    domSanitizer = TestBed.get(DomSanitizer);
  });

  describe('fetchIcons()', () => {
    let getIconsSpy: jasmine.Spy;
    let matIconRegistryAddSvgIconSpy: jasmine.Spy;
    let domSanitizerBypassSecurityTrustResourceUrlSpy: jasmine.Spy;

    beforeEach(() => {
      getIconsSpy = spyOn(materialIconsService, 'getIcons').and.returnValue(MaterialIconsMock);
      matIconRegistryAddSvgIconSpy = spyOn(matIconRegistry, 'addSvgIcon').and.stub();
      domSanitizerBypassSecurityTrustResourceUrlSpy = spyOn(domSanitizer, 'bypassSecurityTrustResourceUrl').and.returnValue(undefined);
    });

    it('should call "getIcons" to get the icons', () => {
      materialIconsService.fetchIcons();

      expect(getIconsSpy).toHaveBeenCalledTimes(1);
      expect(getIconsSpy).toHaveBeenCalledWith();
    });

    it('should call "addSvgIcon" from "matIconRegistry" for each icons', () => {
      materialIconsService.fetchIcons();

      expect(matIconRegistryAddSvgIconSpy).toHaveBeenCalledTimes(MaterialIconsMock.length);
    });

    it('should call "addSvgIcon" from "matIconRegistry" with "icon.name" as first parameter', () => {
      materialIconsService.fetchIcons();

      expect(matIconRegistryAddSvgIconSpy.calls.allArgs()).toEqual([
        [
          MaterialIconsMock[ 0 ].name,
          undefined
        ],
        [
          MaterialIconsMock[ 1 ].name,
          undefined
        ]
      ]);
    });

    it('should call "addSvgIcon" from "matIconRegistry" and call "bypassSecurityTrustResourceUrl" from "domSanitizer" with "assets/images/${icon.path}" as second parameter', () => {
      domSanitizerBypassSecurityTrustResourceUrlSpy.and.callFake((path: string) => path);

      materialIconsService.fetchIcons();

      expect(matIconRegistryAddSvgIconSpy.calls.allArgs()).toEqual([
        [
          MaterialIconsMock[ 0 ].name,
          `assets/images/${MaterialIconsMock[ 0 ].path}`
        ],
        [
          MaterialIconsMock[ 1 ].name,
          `assets/images/${MaterialIconsMock[ 1 ].path}`
        ]
      ]);
    });
  });

  describe('getIcons()', () => {
    let icons: MaterialIconsIconInterface[];

    it('should return const "MaterialIcons"', () => {
      icons = materialIconsService.getIcons();

      expect(icons).toEqual(MaterialIcons);
    });
  });
});
