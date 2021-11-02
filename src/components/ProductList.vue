<template>
    <div class="container">
      <div class="card my-5 shadow">
        <div class="card-body">
          <div class="row">
            <product
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :price="product.price"
                :title="product.title"
                :image="product.image"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import Product from './Product'

export default {
    name: 'ProductList',
    components: { Product },
    props: {
      products: Array,
    }
}

</script>