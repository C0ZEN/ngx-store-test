import { BlurUpImageAttributesEnum } from './blur-up-image-attributes.enum';

describe('BlurUpImageAttributesEnum:', () => {
  it('should have a member "BASE64" which equals "appBlurUpImageBase64"', () => {
    expect(BlurUpImageAttributesEnum.BASE64).toBe('appBlurUpImageBase64');
  });

  it('should have a member "SRC" which equals "appBlurUpImageSrc"', () => {
    expect(BlurUpImageAttributesEnum.SRC).toBe('appBlurUpImageSrc');
  });
});
