<template>
  <VueDraggableNext
    class="dragArea"
    tag="ul"
    :list="list"
    :group="{ name: 'g1' }"
    item-key="name"
  >
    <template #item="{ element }">
      <li>
        <p>{{ element.name }}</p>
        <!-- <Nest :list="element.list" /> -->
      </li>
    </template>
  </VueDraggableNext>
</template>


<script setup lang="ts">
import { defineProps, withDefaults } from "vue"
import { VueDraggableNext } from "vue-draggable-next"

interface IProps {
  list: Array<{ name: string, list: any[] }>
}

const props = withDefaults(defineProps<IProps>(), {
  list: () => []
}) 
</script>

<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
