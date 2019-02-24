import {
  ElementRef,
  Renderer2
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BlurUpImageDirective } from './blur-up-image.directive';

describe('BlurUpImageDirective:', () => {
  let directive: BlurUpImageDirective;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = TestBed.get(ElementRef);
    renderer = TestBed.get(Renderer2);

    directive = new BlurUpImageDirective(elementRef, renderer);
  });
});
