<template>
    <table class="table cart-table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col" class="text-center">Quantity</th>
            <th scope="col" class="text-center">Price</th>
            <th scope="col"></th>
            </tr>
        </thead>

        <CartProductItem />
        
    
    </table>
</template>

<script>
    import CartProductItem from './CartProductItem'

    export default ({
        name: 'CartProductsList',
        components: { CartProductItem },
    })
</script>