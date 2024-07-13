export type QueryData = object | string;

// RESTful API
export interface ResultData<T = unknown> {
  code: number;
  data?: T;
  msg: string;
}
