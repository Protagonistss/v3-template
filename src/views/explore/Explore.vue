<template>
  <nestedDraggable :tasks="list"></nestedDraggable>
</template>

<script setup lang="ts">
import { reactive } from "vue"
// import Nest from "./Nest.vue"
import nestedDraggable from "@/components/NestCmp.vue"


const list = reactive([
  {
    name: "task 1",
    tasks: [
      {
        name: "task 2",
        tasks: [
          {
            name: 'hello',
            tasks: []
          }
        ]
      }
    ]
  },
  {
    name: "task 3",
    tasks: [
      {
        name: "task 4",
        tasks: []
      }
    ]
  },
  {
    name: "task 5",
    tasks: []
  }
])

</script>

<style scoped>

</style>