<template>
<app-store></app-store>
</template>

<script>
import Store from './components/Store'

export default {
  name: 'app',
  components: {
   'app-store': Store
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
