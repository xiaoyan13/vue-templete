export type QueryData = object | string | number | undefined | null | unknown;

// RESTful API
export interface ResultData<T = unknown> {
  code: number;
  data?: T;
  msg: string;
}
