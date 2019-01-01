export interface TaskInterface {

  // Unique id (uuid)
  id: string;

  // Unique id (uuid) of the related todo
  todoId: string;

  // Name
  name: string;

  // Description
  description: string | undefined;

  // Creation date (ISO)
  creationDate: string;

  // Update date (ISO)
  updateDate: string | undefined;
}
