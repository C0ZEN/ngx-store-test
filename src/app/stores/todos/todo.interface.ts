export interface TodoInterface {

  // Unique id (uuid)
  id: string;

  // Name
  name: string;

  // Description
  description: string | undefined;

  // Creation date (ISO)
  creationDate: string;

  // Update date (ISO)
  updateDate: string | undefined;

  // Image
  avatarUrl: string;
}
