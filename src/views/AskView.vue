<script setup>
import { store } from '@/store/store';
import { computed, onMounted } from "vue";
onMounted(() => {
  store.dispatch('loadAskList')
})

const users = computed(() => { return store.state.askList })
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