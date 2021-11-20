import { defineStore, acceptHMRUpdate } from 'pinia'
import { userLogin } from '@/apis'
import { IResponse } from '@/types';

const useLoginStore = defineStore("login", {
  state: () => ({
    loginContent: {
      username: '',
      password: ''
    }
  }),
  actions: {
    async userLogin () {
      const data:IResponse = await userLogin(this.loginContent)
      return data
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot))
}

export { useLoginStore }