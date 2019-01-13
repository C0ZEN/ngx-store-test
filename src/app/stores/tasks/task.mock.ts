import { TaskInterface } from './task.interface';

export const TaskMock: TaskInterface = {
  todoId: 'todo-id',
  creationDate: new Date().toISOString(),
  description: 'description',
  id: 'id',
  name: 'name',
  updateDate: new Date().toISOString()
};
