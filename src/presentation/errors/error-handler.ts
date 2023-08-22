import { HTTP_STATUS } from '@/presentation/constants';
import { HTTPErrorHandlerResponse } from '@/presentation/interfaces/http';

export const handleError = (error: Error): HTTPErrorHandlerResponse => {
  return {
    statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    body: {
      message: error.message,
    }
  };
};
