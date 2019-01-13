import {
  async,
  TestBed
} from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerModule } from 'ngx-logger';
import { TodosService } from '../../../../../stores/todos/todos.service';
import { TodosTodoActiveResolver } from './todos-todo-active.resolver';

describe('TodosTodoActiveResolver:', () => {
  let todosTodoActiveResolver: TodosTodoActiveResolver;
  let todosService: TodosService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

        // Angular
        RouterTestingModule,

        // Third parties
        LoggerModule.forRoot(undefined)
      ]
    });
  }));

  beforeEach(() => {
    todosTodoActiveResolver = TestBed.get(TodosTodoActiveResolver);
    todosService = TestBed.get(TodosService);
  });

  describe('resolve()', () => {
    let activatedRouteSnapshot: ActivatedRouteSnapshot;
    let activatedRouteSnapshotParamMapGetSpy: jasmine.Spy;
    let todosServiceActivateSpy: jasmine.Spy;

    beforeEach(() => {
      activatedRouteSnapshot = new ActivatedRouteSnapshot();

      activatedRouteSnapshotParamMapGetSpy = spyOn(activatedRouteSnapshot.paramMap, 'get').and.stub();
      todosServiceActivateSpy = spyOn(todosService, 'activate').and.stub();
    });

    it('should call "get" from parameter "activatedRouteSnapshot.paramMap" with "todoId" parameter to get the todoId stored in the current route', () => {
      todosTodoActiveResolver.resolve(activatedRouteSnapshot);

      expect(activatedRouteSnapshotParamMapGetSpy).toHaveBeenCalledTimes(1);
      expect(activatedRouteSnapshotParamMapGetSpy).toHaveBeenCalledWith('todoId');
    });

    it('should not call "activate" from "todosService" when the "todoId" is null', () => {
      activatedRouteSnapshotParamMapGetSpy.and.returnValue(null);

      todosTodoActiveResolver.resolve(activatedRouteSnapshot);

      expect(todosServiceActivateSpy).not.toHaveBeenCalled();
    });

    it('should not call "activate" from "todosService" when the "todoId" is undefined', () => {
      activatedRouteSnapshotParamMapGetSpy.and.returnValue(undefined);

      todosTodoActiveResolver.resolve(activatedRouteSnapshot);

      expect(todosServiceActivateSpy).not.toHaveBeenCalled();
    });

    it('should not call "activate" from "todosService" when the "todoId" is an empty string', () => {
      activatedRouteSnapshotParamMapGetSpy.and.returnValue('');

      todosTodoActiveResolver.resolve(activatedRouteSnapshot);

      expect(todosServiceActivateSpy).not.toHaveBeenCalled();
    });

    it('should call "activate" from "todosService" with "todoId" as param when the "todoId" is a string', () => {
      const activatedRouteSnapshotParamMapGetSpyValue: string = 'dummy';
      activatedRouteSnapshotParamMapGetSpy.and.returnValue(activatedRouteSnapshotParamMapGetSpyValue);

      todosTodoActiveResolver.resolve(activatedRouteSnapshot);

      expect(todosServiceActivateSpy).toHaveBeenCalledTimes(1);
      expect(todosServiceActivateSpy).toHaveBeenCalledWith(activatedRouteSnapshotParamMapGetSpyValue);
    });
  });
});
