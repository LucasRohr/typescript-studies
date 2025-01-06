export interface ErrorLogRepository {
  log(stack: string): Promise<void>;
}
