export interface DeleteResponse {
  success: boolean;
}

export interface DeleteAccount {
  execute(id: string): Promise<DeleteResponse>;
}
