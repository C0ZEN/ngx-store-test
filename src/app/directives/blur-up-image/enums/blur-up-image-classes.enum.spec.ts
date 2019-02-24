import { BlurUpImageClassesEnum } from './blur-up-image-classes.enum';

describe('BlurUpImageClassesEnum:', () => {
  it('should have a member "LOW_QUALITY" which equals "app-blur-up-image-low-quality"', () => {
    expect(BlurUpImageClassesEnum.LOW_QUALITY).toBe('app-blur-up-image-low-quality');
  });

  it('should have a member "HIGH_QUALITY" which equals "app-blur-up-image-high-quality"', () => {
    expect(BlurUpImageClassesEnum.HIGH_QUALITY).toBe('app-blur-up-image-high-quality');
  });
});
