export interface DeleteTask {
  delete(taskId: string): Promise<void | Error>;
}
