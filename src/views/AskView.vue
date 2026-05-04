<script setup>
import { store } from '@/store/store';
import { computed, onMounted } from "vue";
import ListItem from "@/components/ListItem.vue";
import bus from "@/utils/bus";

onMounted(() => {
  bus.emit('startSpinner')
  store.dispatch('loadAskList')
      .then(() => { bus.emit('endSpinner') })
})
const type = 'ASK'
const askList = computed(() => {
  const list = store.state.askList
  console.log(JSON.stringify(list))
  return list
})
</script>

<template>
  <div>
    <list-item v-bind:list="askList" v-bind:type="type"></list-item>
  </div>
</template>

<style scoped>

</style>