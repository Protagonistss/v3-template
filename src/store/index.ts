import { defineStore } from 'pinia'

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
  rootStore
}