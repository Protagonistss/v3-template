import { _post } from '@/utils/net'
import { IAxiosRequestConfig } from '@/types'

const userLogin = (payloads: unknown, config?: IAxiosRequestConfig): Promise<any> => {
  return _post("/auth/login/submit", payloads, { ...config })
}


export { userLogin }