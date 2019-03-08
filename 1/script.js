var app = new Vue({
    el: '#app',
    data: {
        product: 'Car',
        description: 'Toyota Camry',
        image: 'https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0/background-colour/fff/image-quality/70/day-exterior-27_4u3.jpg',
        altText: 'Camry',
        linkMoreAbout: 'https://www.toyota-europe.com/new-cars/camry/',
        inventory: 8,
        onSale: false,
        details: ['Exterior view', 'Other features', 'X-Ray Safety'],
        variants: [
            {
                variantId: 1,
                variantColor: '#cd7f32',
                variantImg: 'https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_4u3.jpg'
            },
            {
                variantId: 2,
                variantColor: '#1d2739',
                variantImg: 'https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_1h2.jpg'
            },
            {
                variantId: 3,
                variantColor: '#cccfc4',
                variantImg: 'https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_1f7.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart++
        },
        updateProduct(variantImg) {
            this.image = variantImg
        },
        removeFromCart() {
            this.cart--
        }
    }

});