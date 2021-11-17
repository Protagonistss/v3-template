import Axios, { AxiosRequestConfig } from 'axios'
import { IFlatMap } from "@/types"


const prefix = '/api'
const axios = Axios.create({
  baseURL: prefix
})


axios.interceptors.request.use(
  onFulfilled => {
    return onFulfilled
  },
  onRejected => {
    return Promise.reject(onRejected)
  }
)

axios.interceptors.response.use(
  onFulfilled => {
    return onFulfilled
  },
  onRejected => {
    return Promise.reject(onRejected)
  }
)

const joinQueryStringToUri = (uri: string, json: IFlatMap) => {
  const url = parseQueryString(json)
    ? uri + '?' + parseQueryString(json)
    : uri
  return url
}

const parseQueryString = (querys: IFlatMap): string => {
  if (!querys) return ''
  const tempArea = []
  for (const key in querys) {
    tempArea.push(key + '=' + querys[key])
  }
  const res = tempArea.join('&')
  return res
}

const _get = (uri: string, querys: IFlatMap, config: AxiosRequestConfig) => {
  return axios
    .get(joinQueryStringToUri(uri, querys), config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.response))
}

const _post = (
  uri: string,
  payloads: IFlatMap,
  config: AxiosRequestConfig,
) => {
  return axios
    .post(uri, payloads, config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.response))
}

const _delete = (uri: string, params: IFlatMap, config: AxiosRequestConfig) => {
  return axios
    .delete(joinQueryStringToUri(uri, params), config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.response))
}

const _put = (uri: string, payloads: IFlatMap, config: AxiosRequestConfig) => {
  return axios
    .put(uri, payloads, config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.response))
}

const _patch = (
  uri: string,
  payloads: IFlatMap,
  config: AxiosRequestConfig
) => {
  return axios
    .patch(uri, payloads, config)
    .then(res => res.data)
    .catch(error => error.response)
}

const _download = (uri: string, params: IFlatMap, config: AxiosRequestConfig) => {
  return axios
    .get(joinQueryStringToUri(uri, params), config)
    .then(res => res)
    .catch(error => error.response)
}

export {
  _get,
  _post,
  _delete,
  _put,
  _patch,
  _download,
  prefix,
  joinQueryStringToUri
}