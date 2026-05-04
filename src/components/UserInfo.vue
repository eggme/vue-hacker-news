<script setup>
import {computed, defineProps, toRefs} from "vue";
import {decodeHTML} from "entities";

const prop = defineProps({
  user: Object,
  viewType: String,
})

const { user, viewType } = toRefs(prop)
const displayTime = computed(() => {
  return user.value?.created || user.value?.time_ago
})

console.log('user => ', JSON.stringify(user.value))
console.log('viewType => ', viewType)
</script>

<template>
  <div class="user-container">
    <i class="fas fa-user" />
    <div class="user-description">
      <span class="username">{{ user.id }}</span>
      <div class="user-time">
<!--      <slot name="username" class="username" />-->
<!--      <slot name="time" class="user-time"/>-->
        <template v-if="viewType === 'COMMENT'">
          <span>{{ 'Posted ' + displayTime }} | {{ user.comments_count }} comments</span>
        </template>
        <template v-else>
          <span>{{ 'Joined ' + displayTime }} | {{ user.karma }}</span>
        </template>
      </div>
      <div v-html="decodeHTML(user.about || '')"></div>
    </div>
  </div>
</template>

<style scoped>
.user-container {
  padding: 0.8rem 0.2rem;
  background: antiquewhite;
  display: flex;
  align-items: center;
}
.user-time {
  display: flex;
  flex-direction: column;
}
.fa-user {
  font-size: 2.5rem;
}
.username {
  font-size: 1.5rem;
}
.user-description {
  display: flex;
  flex-direction: column;
}
</style>