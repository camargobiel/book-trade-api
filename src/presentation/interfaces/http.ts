export interface HTTPErrorHandlerResponse {
  statusCode: number;
  body: {
    message: string;
  };
}
