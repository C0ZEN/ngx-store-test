import { BlurUpImageStylesEnum } from './blur-up-image-styles.enum';

describe('BlurUpImageStylesEnum:', () => {
  it('should have a member "BACKGROUND_IMAGE" which equals "background-image"', () => {
    expect(BlurUpImageStylesEnum.BACKGROUND_IMAGE).toBe('background-image');
  });

  it('should have a member "CLIP" which equals "clip"', () => {
    expect(BlurUpImageStylesEnum.CLIP).toBe('clip');
  });
});
