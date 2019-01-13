import { TodoInterface } from './todo.interface';

export const TodoMock: TodoInterface = {
  creationDate: new Date().toISOString(),
  description: 'description',
  id: 'id',
  name: 'name',
  updateDate: new Date().toISOString(),
  avatarUrl: 'avatar-url'
};
