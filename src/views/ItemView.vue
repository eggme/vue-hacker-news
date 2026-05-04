<script setup>
import {computed, onMounted} from "vue";
import {store} from "@/store/store";
import {useRoute} from "vue-router";
import {decodeHTML} from "entities";
import CommentView from "@/views/CommentView.vue";
import UserInfo from "@/components/UserInfo.vue";
import bus from "@/utils/bus";

onMounted(() => {
  bus.emit('startSpinner')
  const route = useRoute()
  store.dispatch('loadItem', route.query.id)
      .then(() => { bus.emit('endSpinner') })
})
const viewType = 'COMMENT'
const item = computed(() => {
  const itemInfo = store.state.item
  console.log('item =>', JSON.stringify(itemInfo))
  return itemInfo
})
</script>

<template>
  <div>
    <section>
      <div>
        <user-info v-bind:user="{
            id:item.user,
            time_ago: item.time_ago,
            comments_count: item.comments_count,
    }"  v-bind:viewType="viewType">
<!--          <template v-slot:username>-->
<!--            <router-link v-bind:to="`/user?id=${item.user}`" class="username">{{ item.user }}</router-link>-->
<!--          </template>-->
<!--          <template v-slot:time>-->
<!--            <div class="user-time">-->
<!--              <span>{{ item.time_ago }} | {{ item.comments_count }} comments</span>-->
<!--            </div>-->
<!--          </template>-->
        </user-info>
        <div class="item-description">
          <h2 class="item-title">{{ item.title }}</h2>
          <div v-html="decodeHTML(item.content || '')"></div>
        </div>
      </div>
    </section>
    <section class="comment-section">
      <CommentView v-if="item.comments?.length > 0" v-bind:comments="item.comments" v-bind:parentCount="0"></CommentView>
    </section>
  </div>
</template>

<style scoped>
.user-container {
  padding: 0.8rem 0.2rem;
  background: antiquewhite;
  display: flex;
  //flex-direction: row;
  align-items: center;
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
.item-description {
  padding: 0.2rem 0.8rem;
}
.item-title {
  padding-bottom: 1rem;
  border-bottom: 1px solid #42b883;
}
.comment-section {
  padding: 1rem;
}
</style>