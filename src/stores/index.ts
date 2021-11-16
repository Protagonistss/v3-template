import { defineStore } from 'pinia'
import { useLoginStore } from "./login"

const rootStore = defineStore('root', {
  state: () => ({
    homePage: 'homePage'
  }),
  getters: {},
  actions: {
    printHomePage () {
      console.log(this.homePage)
    }
  }
})

export {
  rootStore,
  useLoginStore
}