<script setup>
import {computed, onMounted} from "vue";
import {store} from "@/store/store";
import {useRoute} from "vue-router";
import {decodeHTML} from "entities";

const route = useRoute()

onMounted(() => {
  store.dispatch('loadUser', route.query.id)
})

const user = computed(() => {
  const userInfo = store.state.user
  console.log(JSON.stringify(userInfo))
  return userInfo
})

</script>

<template>
  <div> User : {{ user.id }} </div>
  <div> created : {{ user.created }} </div>
  <div> karma : {{ user.karma }} </div>
  <div> about : <span v-html="decodeHTML(user.about || '')"></span> </div>
</template>

<style scoped>

</style>