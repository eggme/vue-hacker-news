<script setup>
import {computed, defineProps, toRefs} from "vue";
import ListItem from "@/components/ListItem.vue";
// import bus from "@/utils/bus";
import {store} from "@/store/store";

const prop = defineProps({
  type: String
})

const { type } = toRefs(prop)

// onMounted(() => {
//   bus.emit('startSpinner')
//   store.dispatch('loadList', type)
//       .then(() => { bus.emit('endSpinner') })
// })

const list = computed(() => {
  const list = store.state.list
  console.log(JSON.stringify(list))
  return list
})
</script>

<template>
  <list-item v-bind:list="list" v-bind:type="type"></list-item>
</template>

<style scoped>

</style>