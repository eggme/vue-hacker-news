<script setup>
import { store } from '@/store/store'
import {computed, onMounted } from "vue";
import ListItem from "@/components/ListItem.vue";
import bus from "@/utils/bus";

onMounted(() => {
  bus.emit('startSpinner')
  store.dispatch('loadJobsList')
      .then(() => { bus.emit('endSpinner') })
})
const type = 'JOBS'
const jobsList = computed(() => {
  const list = store.state.jobsList
  console.log(JSON.stringify(list))
  return list
})
</script>

<template>
  <div>
    <list-item v-bind:list="jobsList" v-bind:type="type"></list-item>
  </div>
</template>

<style scoped>

</style>