import { AxiosRequestConfig }  from 'axios'

export interface IAxiosRequestConfig extends AxiosRequestConfig {}
export interface IFlatMap {
  [key: string]: unknown
}

export interface IResponse {
  msg: string
  code: number
  data: IFlatMap
}