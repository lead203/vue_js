<template>
    <tbody>
        <!-- cartProduct -->
        <ProductItem
            v-for="product in $root.cartProduct"
            :key="product.id"
            :count="product.count"
            :price="product.price"
            :title="product.title"
            :image="product.image"
        />
    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
        <td class="text-end">
        Total:
        </td>
        <td class="text-center">{{$root.count}}</td>
        <td class="text-end">${{$root.price}}</td>
    </tr>
    </tfoot>
    
</template>

<script>
import ProductItem from './ProductItem'

export default ({
    

    name: 'CartProductItem',
    data: () => ({
        // total: 0,
    }),
    components: { ProductItem },
    methods: {
        // increment() {
        //     this.count++
        // },
        // decrement() {
        //     if(this.count > 0) {
        //         this.count--
        //     }
        // }
    },
})
</script>