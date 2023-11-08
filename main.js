Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product">
            <div class="product-image">
                <img :src="image" :alt="product">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>

                <p v-if="inStock">In stock</p>
                <p v-else>Out of stock</p>
                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div 
                    v-for="(variant, index) in variants" 
                    :key="variant.id"
                    class="color-box"
                    :style="{ backgroundColor: variant.color }"
                    @mouseover="updateProduct(index)"
                ></div>

                <button 
                    @click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
                >Add to cart</button>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>

            </div>
        </div>`,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyster', 'Gender-neutral'],
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/vmSocks-green.jpg',
                    quantity: 8
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/vmSocks-blue.jpg',
                    quantity: 0
                }
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return "2.99"
        }
    }
})

var app = new Vue ({
    el: '#app',
    data: {
        premium: true
    }
})