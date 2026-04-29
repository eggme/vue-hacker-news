<script setup>
import CommentView from "@/views/CommentView.vue";
import { decodeHTML } from "entities";
import {defineProps, toRefs} from "vue";

const props = (defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
  parentCount: {
    type: Number,
    default: 0,
  }
}))

const { comments, parentCount } = toRefs(props);

console.log(parentCount)
</script>

<template>
  <div v-for="comment in comments" v-bind:key="comment.id" class="background" :style="{ '--depth': parentCount }">
    <div> {{ comment.user }} {{ comment.time_ago }}</div>
    <div v-html="decodeHTML(comment.content || '')"></div>
    <CommentView v-if="comment.comments?.length > 0" v-bind:comments="comment.comments" v-bind:parentCount="parentCount+1"></CommentView>
  </div>
</template>

<style scoped>
.background {
  background-color: #42b883;
  padding-left: calc(var(--depth) * 20px);
}
</style>