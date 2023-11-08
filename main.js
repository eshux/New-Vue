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
                color: 'green'
            },
            {
                id: 2235,
                color: 'blue'
            }
        ]
    }
})