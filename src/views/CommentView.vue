<script setup>
import CommentView from "@/views/CommentView.vue";
import UserInfo from "@/components/UserInfo.vue";
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
const viewType = 'COMMENT'
const { comments, parentCount } = toRefs(props);

console.log(parentCount)
</script>

<template>
  <div v-for="comment in comments" v-bind:key="comment.id" class="background" :style="{ '--depth': parentCount }">
    <user-info v-bind:user="{
      id:comment.user,
      time_ago: comment.time_ago,
      comments_count: comment.comments_count,
    }" v-bind:viewType="viewType">
<!--      <template v-slot:username>-->
<!--        <div class="username">{{ comment.user }}</div>-->
<!--      </template>-->
<!--      <template v-slot:time>-->
<!--        <div class="user-time">-->
<!--          <span>{{ comment.time_ago }} | {{ comment.comments_count }} comments</span>-->
<!--        </div>-->
<!--      </template>-->
    </user-info>
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