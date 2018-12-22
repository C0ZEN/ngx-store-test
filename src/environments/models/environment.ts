import { EnvironmentHmr } from './environment-hmr';

export interface Environment {
  production: boolean;
  hmr: EnvironmentHmr;
}
