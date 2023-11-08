var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/images/vmSocks-green.jpg',
        inStock: true,
        details: ['80% cotton', '20% polyster', 'Gender-neutral'],
        variants: [
            {
                id: 2234,
                color: 'green',
                image: './assets/images/vmSocks-green.jpg'
            },
            {
                id: 2235,
                color: 'blue',
                image: './assets/images/vmSocks-blue.jpg'
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})