<script setup>
import { store } from '@/store/store';
import {computed, onMounted} from "vue";
onMounted(() => {
  store.dispatch('loadNewsList')
})

const users = computed(() => { return store.state.newsList })
</script>

<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<style scoped>

</style>