import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductList from './components/ProductList'
import CartModal from './components/CartModal'
import CartButton from './components/CartButton'

const app = createApp({
    data: () => ({
        count: 0,
        price: 0,
        flag: false,
        products: [],
        cartProduct: [],
    }),
    methods: {
        async fetchProducts() {
            const response = await fetch('http://localhost:3000/products')
            this.products = await response.json()
        },
        addCart(id, title, image, price) {
            if(this.cartProduct.length > 0) {
                this.flag = false

                this.cartProduct.map(product => {
                    if(product.id == id) {
                        product.count += 1
                        this.flag = true
                    }
                    
                });

                if(this.flag == false) {
                    this.cartProduct.push({id, title, image, price, count: 1})
                }
            } else {
                this.cartProduct.push({id, title, image, price, count: 1})
            }

            this.count = 0
            this.price = 0

            this.cartProduct.map(product => {
                this.count += product.count
                this.price += parseInt(product.price) * product.count
                console.log(this.price)
            });
        },
        increment() {
            this.count++
        },
        decrement() {
            if(this.count > 0) {
                this.count--
            }
        }
    },
    mounted() {
        this.fetchProducts()
    }
});

app.component("product-list", ProductList);
app.component("curt-button", CartButton);
app.component("cart-modal", CartModal);

app.mount("#app");


