<template>
<div class="container-fluid">
    <div class="row">
        <div class="col bg-dark text-white">
            <a class="navbar-brand">SPORTS STORE</a>
        </div>
    </div>
    <div class="row">
        <div class="col-3 bg-info p-2">
           <app-category-control></app-category-control>
        </div>
        <div class="col-9 bg-success p-2">
            <app-product-list></app-product-list>
        </div>
    </div>
</div>
</template>

<script>
import ProductList from './ProductList';
import CategoryControl from './CategoryControl';

export default {
    components: {
        'app-product-list': ProductList,
        'app-category-control': CategoryControl
    }
}
</script>
