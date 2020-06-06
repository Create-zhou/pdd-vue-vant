<template>
  <div id="app">
    <router-view />
      <tabbar/>
  </div>
</template>

<script>
import tabbar from './components/tabbar'
export default {
  name: "app",
  components: {
    tabbar
  }
};
</script>

<style>
</style>
