<template>
	<div class="product">	
		<div class="product-image">
			<img :src="image" :alt="altText">	
			<div class="color-group">
				<div class="color color-box" 
					v-for="variant in variants" 
					:key="variant.variantId" 
					:style="{ backgroundColor: variant.variantColor }" 
					@mouseover="updateProduct(variant.variantImg)"
					>
				</div>
			</div>
		</div>
	
		<div class="product-info">
			<h1>{{ title }}</h1>	
			<ul class="details">
				<li v-for="detail in details" :key="detail">{{ detail }}</li>
			</ul>
			<a :href="linkMore" target="_blank" class="link-more">More about car</a>	
			<p class="info" v-if="inventory > 10">In Stock</p>
			<p class="info" v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>	
			<span v-if="onSale" class="info">On Sale!</span>
			<p v-else class="info out-of-stock">Out of stock</p>
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
		props: ['name', 'description', 'image', 'isActive', 'variants', 'linkMore', 'altText', 'details'],
		data() {
			return {
				inventory: 8,
				onSale: true,				
				cart: 0
			};
		},
		methods: {
			addToCart() {
				this.cart++;
			},
			removeFromCart() {
				if (this.cart <= 0) {
					this.cart = 0;
					return;
				}
				this.cart--;
			},
			updateProduct(variantImg) {
				this.image = variantImg;
			}
	
		},
		computed: {
			title() {
				return `${this.name}: ${this.description}`
			},
			

		}
	};
</script>


<style scoped>
	.product {
		max-width: 500px;
		margin: auto;
		display: flex;
		margin-top: 10px;
		box-shadow: 0px 0px 1px 0px black;
		padding: 15px;
	}
	
	.details {
		font-size: 12px;
		padding-left: 16px;
	}

	.link-more {
		font-size: 12px;
		font-style: italic;		
		color: blueviolet;
	}
	
	.product-image {
		width: 70%;
		flex-direction: column;
		text-align: center;
		display: flex;
	}
	
	.product-image img {
		width: 100%;
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
		padding-left: 30px;
		text-align: left;
	}
	
	.disabledBtn {
		background: silver;
		border: none;
		color: #fff;
		cursor: not-allowed;
	}	
	
	.info {
		margin: 0;
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

	.btn-block {
		display: flex;
	}
	
	.btn-block button {
		font-size: 10px;
		width: auto;
		margin-right: 10px;
	}
</style>
