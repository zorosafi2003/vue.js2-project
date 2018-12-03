<template>
  <div>
    <div v-for="(p , index) in getProducts" v-bind:key="index" class="card m-1 p-1 bg-light">
      <h4>
        {{p.name}}
        <span class="badge badge-pill badge-primary float-right">{{ p.price |currency }}</span>
      </h4>
      <div class="card-text bg-white p-1">{{ p.description }}</div>
    </div>
    <app-page-control></app-page-control>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageControl from './PageControl'

export default {
  computed: {
    ...mapGetters({getProducts:"product/getProducts"})
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }
  },
  components:{
      'app-page-control': PageControl
  }
};
</script>
