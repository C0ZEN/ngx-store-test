import { guid } from '@datorama/akita';

export interface TodoInterface {

  // Unique id (uuid)
  // Auto set when creating a todo
  id: string;

  // Name of the current todo list
  name: string;
}

export function createTodo({
  name = ''
}): Partial<TodoInterface> {
  return {
    id: guid(),
    name
  };
}
