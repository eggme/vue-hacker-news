<script setup>
import { store } from '@/store/store';
import { computed, onMounted } from "vue";
onMounted(() => {
  store.dispatch('loadAskList')
})

const askList = computed(() => {
  const list = store.state.askList
  console.log(JSON.stringify(list))
  return list
})
</script>

<template>
  <div>
    <div v-for="ask in askList" v-bind:key="ask.id">
      <a v-bind:href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.time_ago }}  {{ ask.user }}</small>
    </div>
  </div>
</template>

<style scoped>

</style>