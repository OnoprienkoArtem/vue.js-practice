<template>
  <div class="product">

    <div class="product-image">
      <img :src="image" alt="altText">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>

     

      <ul class="details">
        <li v-for="detail in details" :key="detail">{{ detail }}</li>
      </ul>
      <a :href="linkMoreAbout">More about car</a>

      <p class="info" v-if="inventory > 10">In Stock</p>
      <p class="info" v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>

      <span v-if="onSale" class="info">On Sale!</span>
      <p v-else class="info out-of-stock">Out of stock</p>

      <div class="color-group">

        <div
          class="color color-box"
          v-for="variant in variants"
          :key="variant.variantId"
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
  props: ['name', 'description', 'image', 'isActive', 'variants'],
  data() {
    return {   
      altText: "Camry",
      linkMoreAbout: "https://www.toyota-europe.com/new-cars/camry/",
      inventory: 8,
      onSale: true,
      details: ["Exterior view", "Other features", "X-Ray Safety"],
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
  },
  computed: {
    title() {
      return `${this.name}: ${this.description}`
    }
  }
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  display: flex;
}

.details {
  font-size: 12px;
}

.product-image {
  width: 60%;
  box-shadow: 0px 0px 1px 0px black;
  text-align: center;
  display: flex;
}

.product-image img {
  width: 80%;
  margin: auto;
}

h1 {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 5px;
}


.out-of-stock {
  text-decoration-line: line-through;
}

.color {
  cursor: pointer;
}

.color p {
  margin: 5px 0;
}

.product-info {
  width: 40%;
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
  width: 20%;
  margin-right: 10px;
}
</style>
