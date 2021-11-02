<template>
    <div class="col-md-6 col-lg-4 py-3">
        <div class="card py-3">
        <img class="card-img-top" v-bind:src="image" alt="macbook-pro">
        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
            <p class="card-subtitle mt-2 mb-3">
            Computer & Accessories
            </p>
            <h5 class="fs-3 text-success">
            ${{price}}
            </h5>
            <p class="mt-3">
            Stock:
            <strong class="text-success">Available</strong>
            </p>
            <button @click="$root.addCart(id, title, image, price)" class="btn btn-success w-100 shadow-none">
            Add to cart
            </button>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Product',
    props: {
        id: String,
        title: String,
        image: String,
        price: String,
    },
    data: () => ({
        // image: 'img/macbook-pro.jpeg'
    })
}

</script>