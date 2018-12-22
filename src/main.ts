import {
  ApplicationRef,
  NgModuleRef
} from '@angular/core';
import {
  createNewHosts,
  hmrModule
} from '@angularclass/hmr';

export const hmrBootstrap: any = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<any>>
): void => {
  let ngModule: NgModuleRef<any>;

  module.hot.accept();

  bootstrap().then((mod: any) => {
    ngModule = mod;
    return hmrModule(mod, module);
  });

  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements: any = appRef.components.map((c: any) => c.location.nativeElement);
    const makeVisible: Function = createNewHosts(elements);
    makeVisible();
  });
};
