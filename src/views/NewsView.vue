<script setup>
import { store } from '@/store/store';
import {onMounted, computed,} from "vue";
import ListItem from "@/components/ListItem.vue";
// import bus from "@/utils/bus";
// import ListMixIn from '@/composable/useList'
import { useList } from "@/composable/useList";
const type = 'NEWS'
const { load } = useList(type)
onMounted(() => {
  load()
  // bus.emit('startSpinner')
  // store.dispatch('loadNewsList')
  //     .then(() => { bus.emit('endSpinner') })
})

const list = computed(() => { return store.state.list })
</script>

<template>
  <div>
    <list-item v-bind:list="list" v-bind:type="type"></list-item>
  </div>
</template>

<style scoped>

</style>