export type HTTPResponse<T = unknown> = {
  statusCode: number;
  body: T;
}

export type ErrorStack = string | undefined

export const serverError = (error: Error): HTTPResponse<ErrorStack> =>({
  statusCode: 500,
  body: error.stack
});

export const ok = <T = unknown>(data: T): HTTPResponse<T> =>({
  statusCode: 500,
  body: data
});
