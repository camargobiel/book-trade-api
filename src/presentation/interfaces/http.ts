export interface HTTPErrorHandlerResponse {
  statusCode: number;
  body: {
    message: string;
  };
}

export interface ErrorBody {
  message: string;
}
