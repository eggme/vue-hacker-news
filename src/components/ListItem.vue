<script setup>
import { defineProps, toRefs } from "vue";

const props  = defineProps({
  list: Array,
  type: String
})
const { list, type } = toRefs(props)
</script>

<template>
    <div>
      <ul class="item-list">
        <li class="post" v-for="item in list" v-bind:key="item.id">
          <!-- 포인트 영역 -->
          <div class="points" v-if="item.points != null">
            {{ item.points }}
          </div>
          <!-- 기타 정보 영역 -->
          <div class="item" :class="{'with-points': item.points != null}">
            <p class="item-title">
              <a v-bind:href="item.link || item.url"
                 :target="(type !== 'ASK') ? '_blank' : null"
                 :rel="(type !== 'ASK') ? 'noopener noreferrer' : null" >
                {{ item.title }}
              </a>
            </p>
            <small class="link-text">
              {{ item.time_ago }}
              by
              <template v-if="type === 'ASK' || type === 'NEWS'">
                <router-link class="router-link" v-bind:to="`/user?id=${item.user}`">{{ item.user }}</router-link>
              </template>
              <template v-else-if="type === 'JOBS'">
                <span class="router-link" v-show="type === 'JOBS'"> {{ item.domain }} </span>
              </template>
            </small>
          </div>
        </li>
      </ul>
    </div>
</template>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  min-height: 60px;
}
.item {
  margin-left: 20px;
}
.with-points {
  margin-left: 0;
}
.points {
  display: flex;
  align-items: center;
  justify-content: center;
  color : #41b883;
  width: 80px;
}
.item-title {
  margin: 0;
}
.link-text {
  color : #828282
}
</style>