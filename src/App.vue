<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
      <spinner-item v-bind:loading="loadingStatus"></spinner-item>
    </router-view>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import SpinnerItem from "@/components/SpinnerItem.vue";
import bus from "@/utils/bus";

export default {
  components: {
    SpinnerItem,
    ToolBar,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.on("startSpinner", this.startSpinner)
    bus.on("endSpinner", this.endSpinner)
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
a {
  text-decoration: none;
  color: #34495e;
}
a:hover {
  color: #41b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
