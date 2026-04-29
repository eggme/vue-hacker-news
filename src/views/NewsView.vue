<script setup>
import { store } from '@/store/store';
import {computed, onMounted} from "vue";

onMounted(() => {
  store.dispatch('loadNewsList')
})

const newsList = computed(() => { return store.state.newsList })
</script>

<template>
  <div>
    <div v-for="news in newsList" v-bind:key="news.id">
      <a v-bind:href="news.link">
        {{ news.title }}
      </a>
      <small>
        {{ news.time_ago }}
        <router-link v-bind:to="`/user?id=${news.user}`" >{{ news.user }}</router-link>
      </small>
    </div>
  </div>
</template>

<style scoped>

</style>