<template>
  <router-view></router-view>
</template>

<script>
import Store from "./components/Store";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    "app-store": Store
  },
  methods: {
    ...mapActions({getData :"product/getData"})
  },
  created() {
    this.getData();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
