<script setup lang="ts">
import { watch, reactive } from "vue"
import { VueDraggableNext } from "vue-draggable-next"
import { dataSource1, dataSource2 } from "./design"


// watch(dataSource1, (cur, pre) => {
//   console.log("cur", cur)
//   console.log("pre", pre)
// })

// watch(dataSource2, (cur, pre) => {
//   console.log("cur", cur)
//   console.log("pre", pre)
// })

const onChangeDesign = (props:any) => {
  console.log(props)
}

const cloneDog = (props:any) => {
  console.log("props", props)
  return {
    name: props.name,
    id: `cus ${props.id}`
  }
}

</script>

<template>
  <article class="flex flex-row h-screen">
    <article class="w-1/4 p-2 bg-gray-300 mr-0.5">
      <VueDraggableNext class="bg-gray-50"
        :list="dataSource1"
        animation="100"
        itemKey="name"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneDog"
        @change="onChangeDesign">
          <transition-group>
            <div v-for="node in dataSource1" :key="node.id">
              {{ node.name }}
            </div>
          </transition-group>
      </VueDraggableNext>
    </article>
    <article class="w-3/4 p-2 bg-gray-300">
      <VueDraggableNext class="bg-gray-50"
        :list="dataSource2"
        itemKey="name"
        group="people"
        @change="onChangeDesign">
          <transition-group>
            <div v-for="node in dataSource2" :key="node.id">
              {{ node.name }}
            </div>
          </transition-group>
      </VueDraggableNext>
    </article>
  </article>
  
</template>

<style scoped>
</style>