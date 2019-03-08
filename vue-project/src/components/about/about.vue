<template>
  <div class="product">
    <div class="product-image">
      <img v-bind:src="image" v-bind:alt="altText">
    </div>

    <div class="product-info">
      <h1>{{ product }}</h1>
      <p>{{ description }}</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <a :href="linkMoreAbout">More about car</a>

      <p class="info" v-if="inventory > 10">In Stock</p>
      <p class="info" v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>

      <span v-if="onSale" class="info">On Sale!</span>
      <p v-else class="info">Out of stock</p>

      <div class="color-group">
        <div
          v-for="variant in variants"
          :key="variant.variantId"
          class="color color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(variant.variantImg)"
        ></div>
      </div>
      <div class="cart">
        <p>Cart {{ cart }}</p>
      </div>
      <div class="btn-block">
        <button v-on:click="addToCart" :disabled="!onSale" :class="{ disabledBtn: !onSale }">Add</button>
        <button @click="removeFromCart">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "Car",
      description: "Toyota Camry",
      image:
        "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0/background-colour/fff/image-quality/70/day-exterior-27_4u3.jpg",
      altText: "Camry",
      linkMoreAbout: "https://www.toyota-europe.com/new-cars/camry/",
      inventory: 8,
      onSale: true,
      details: ["Exterior view", "Other features", "X-Ray Safety"],
      variants: [
        {
          variantId: 1,
          variantColor: "#cd7f32",
          variantImg:
            "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_4u3.jpg"
        },
        {
          variantId: 2,
          variantColor: "#1d2739",
          variantImg:
            "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_1h2.jpg"
        },
        {
          variantId: 3,
          variantColor: "#cccfc4",
          variantImg:
            "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_1f7.jpg"
        }
      ],
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(variantImg) {
      this.image = variantImg;
    },
    removeFromCart() {
      this.cart--;
    }
  }
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  display: flex;
}

.product-image {
  width: 80%;
  box-shadow: 0px 0px 1px 0px black;
  text-align: center;
  display: flex;
}

.product-image img {
  width: 80%;
  margin: auto;
}

h1 {
  margin-top: 0;
}

.color-group {

}

.color {
  cursor: pointer;
}

.color p {
  margin: 5px 0;
}

.product-info {
  width: 20%;
  padding: 0 30px;
  text-align: left;
}

.disabledBtn {
  background: silver;
  border: none;
  color: #fff;
  cursor: not-allowed;
}

.btn-block {
  display: flex;
}

.btn-block button {
  width: 50%;
}

.info {
  color: tomato;
  font-size: 12px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
  margin-right: 10px;
  display: inline-block;
}

.btn-block button {
  font-size: 10px;
  width: 30%;
  margin: auto;
}
</style>
