<script setup>
import { store } from '@/store/store'
import {computed, onMounted } from "vue";
onMounted(() => {
  store.dispatch('loadJobsList')
})

const jobsList = computed(() => {
  const list = store.state.jobsList
  console.log(JSON.stringify(list))
  return list
})
</script>

<template>
  <div>
    <div v-for="job in jobsList" v-bind:key="job.id">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}  {{ job.domain }}</small>
    </div>
  </div>
</template>

<style scoped>

</style>