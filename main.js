var app = new Vue ({
    el: '#app',
    data: {
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
        }
    }
})