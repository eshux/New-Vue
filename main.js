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
    
            </div>

            <div>
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                    </li>
                </ul>
            </div>
            
            <product-review @review-submitted="addReview"></product-review>

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
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        addReview(productReview) {
            this.reviews.push(productReview)
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

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="err in errors">{{ err }}</li>
                </ul>
            </p>
            
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            
            <p>
                <label for="review">Review:</label>      
                <textarea id="review" v-model="review"></textarea>
            </p>
            
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>
                
            <p>
                <input type="submit" value="Submit">  
            </p>    
        
        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            this.errors = [];
            
            if (this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }

                this.$emit('review-submitted', productReview)
                this.name = null;
                this.review = null;
                this.rating = null;
            } else {
                if(!this.name) this.errors.push('Name required');
                if(!this.review) this.errors.push('Review required');
                if(!this.rating) this.errors.push('Rating required');
            }
            
        }
    }
})

var app = new Vue ({
    el: '#app',
    data: {
        premium: true,
        cart: [],
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})