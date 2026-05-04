<script setup>
import UserInfo from "@/components/UserInfo.vue";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
import {store} from "@/store/store";
import bus from "@/utils/bus";

const route = useRoute()

onMounted(() => {
  bus.emit('startSpinner')
  store.dispatch('loadUser', route.query.id)
      .then(() => { bus.emit('endSpinner') })
})

const user = computed(() => {
  const userInfo = store.state.user
  console.log(JSON.stringify(userInfo))
  return userInfo
})

</script>

<template>
  <user-info v-bind:user="user">
<!--    <template v-slot:username>-->
<!--      <div class="username">{{ user.id }}</div>-->
<!--    </template>-->
<!--    <template v-slot:time>-->
<!--      <div class="user-time">-->
<!--        <span>{{ user.created || user.time_ago }}</span>-->
<!--        <span v-if="user.karma != null"> | {{ user.karma }} </span>-->
<!--      </div>-->
<!--    </template>-->
  </user-info>
</template>

<style scoped>

</style>