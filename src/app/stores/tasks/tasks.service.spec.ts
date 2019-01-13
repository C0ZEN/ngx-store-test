import {
  async,
  TestBed
} from '@angular/core/testing';
import { akitaConfig } from '@datorama/akita';
import {
  LoggerModule,
  NGXLogger
} from 'ngx-logger';
import { TodoMock } from '../todos/todo.mock';
import { TodosQuery } from '../todos/todos.query';
import { TaskInterface } from './task.interface';
import { TaskMock } from './task.mock';
import { TasksService } from './tasks.service';
import { TasksStore } from './tasks.store';

describe('TasksService:', () => {
  let tasksService: TasksService;
  let tasksStore: TasksStore;
  let todosQuery: TodosQuery;
  let logger: NGXLogger;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

        // Third parties
        LoggerModule.forRoot(undefined)
      ]
    });
  }));

  beforeEach(() => {
    tasksService = TestBed.get(TasksService);
    tasksStore = TestBed.get(TasksStore);
    todosQuery = TestBed.get(TodosQuery);
    logger = TestBed.get(NGXLogger);

    akitaConfig({
      resettable: true
    });
  });

  describe('add()', () => {
    it('should call "add" from "tasksStore" with "task" as parameter', () => {
      spyOn(tasksStore, 'add').and.stub();

      tasksService.add(TaskMock);

      expect(tasksStore.add).toHaveBeenCalledTimes(1);
      expect(tasksStore.add).toHaveBeenCalledWith(TaskMock);
    });

    it('should call "info" from "logger" with "TasksService: task "${task.id}" added" as parameter', () => {
      spyOn(logger, 'info').and.stub();

      tasksService.add(TaskMock);

      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith(`TasksService: task "${TaskMock.id}" added`);
    });
  });

  describe('reset()', () => {
    it('should call "reset" from "tasksStore"', () => {
      spyOn(tasksStore, 'reset').and.stub();

      tasksService.reset();

      expect(tasksStore.reset).toHaveBeenCalledTimes(1);
    });

    it('should call "info" from "logger" with "TasksService: tasks store reset" as parameter', () => {
      spyOn(logger, 'info').and.stub();

      tasksService.reset();

      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith(`TasksService: tasks store reset`);
    });
  });

  describe('create()', () => {
    let task: TaskInterface;

    beforeEach(() => {
      spyOn(todosQuery, 'getActive').and.returnValue(TodoMock);

      task = tasksService.create();
    });

    it('should return a new task with property "id" as guid', () => {
      expect(typeof task.id).toEqual('string');
      expect(task.id.length).toBeGreaterThan(0);
    });

    it('should return a new task with property "name" as "New task"', () => {
      expect(task.name).toEqual('New task');
    });

    it('should return a new task with property "description" as undefined', () => {
      expect(task.description).toBeUndefined();
    });

    it('should return a new task with property "creationDate" as today in ISO String format', () => {
      expect(typeof task.creationDate).toEqual('string');
      expect(task.creationDate.length).toBeGreaterThan(0);
      expect(typeof new Date(task.id)).toEqual('object');
    });

    it('should return a new task with property "updateDate" as undefined', () => {
      expect(task.updateDate).toBeUndefined();
    });

    it('should return a new task with property "todoId" as active todo id by calling "getActive" from "todosQuery" and use the "id" returned', () => {
      expect(todosQuery.getActive).toHaveBeenCalledTimes(1);
      expect(task.todoId).toEqual(TodoMock.id);
    });
  });

  describe('edit()', () => {
    let task: TaskInterface;

    beforeEach(() => {
      task = {
        ...TaskMock
      };

      spyOn(tasksStore, 'update').and.stub();
    });

    it('should update "updateDate" of the given "task" with today in ISO String format', () => {
      task.updateDate = '';

      tasksService.edit(task);

      expect(typeof task.updateDate).toEqual('string');
      expect(task.updateDate.length).toBeGreaterThan(0);
      expect(typeof new Date(task.updateDate)).toEqual('object');
    });

    it('should call "update" from "tasksStore" with "task.id" and "task" as parameters', () => {
      tasksService.edit(task);

      expect(tasksStore.update).toHaveBeenCalledTimes(1);
      expect(tasksStore.update).toHaveBeenCalledWith(task.id, task);
    });

    it('should call "info" from "logger" with "TasksService: task "${task.id}" edited" as parameter', () => {
      spyOn(logger, 'info').and.stub();

      tasksService.edit(task);

      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith(`TasksService: task "${task.id}" edited`);
    });
  });
})
;
