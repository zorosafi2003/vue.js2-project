<template>
  <div v-if="pageCount > 1" class="text-right">
    <div class="btn-group mx-2">
      <button
        v-for="i in pageNumbers"
        v-bind:key="i"
        class="btn btn-secpmdary"
        v-bind:class="{ 'btn-primary': i == currentPage }"
        @click="setCurrentPage(i)"
      >{{ i }}</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters ,mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({currentPage:"product/currentPage"}),
    ...mapGetters({pageCount:"product/pageCount"}),
    pageNumbers() {
      return [...Array(this.pageCount + 1).keys()].slice(1);
    }
  },
  methods:{
      ...mapMutations({setCurrentPage:"product/setCurrentPage"})
  }
};
</script>