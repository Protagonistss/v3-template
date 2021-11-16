import { defineStore, acceptHMRUpdate } from "pinia"

const exploreStore = defineStore({
  id: 'explore',
  state: () => ({
    test: '1'
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(exploreStore, import.meta.hot))
}