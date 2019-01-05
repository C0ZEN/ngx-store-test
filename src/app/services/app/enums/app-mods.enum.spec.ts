import { AppModsEnum } from './app-mods.enum';

describe('AppModsEnum', () => {
  it('should have a member "PRODUCTION" which equals "production"', () => {
    expect(AppModsEnum.PRODUCTION).toBe('production');
  });

  it('should have a member "DEVELOPMENT" which equals "development"', () => {
    expect(AppModsEnum.DEVELOPMENT).toBe('development');
  });
});
