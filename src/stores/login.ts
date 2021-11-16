import { defineStore, acceptHMRUpdate } from "pinia"

const useLoginStore = defineStore("login", {
  state: () => ({
    loginContent: {
      username: '',
      password: ''
    }
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot))
}

export { useLoginStore }