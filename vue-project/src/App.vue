<template>
	<div id="app">		
		<Header msg="Welcome to Vue.js App" />	
		<about 
			v-for="user in users" 
			:name="user.name" 
			:description="user.description" 
			:variants="user.variants" 
			:image="user.carImg" 
			:key="user.name" 
			:linkMore="user.linkMoreAbout"
			:altText="user.altText"
			:details="user.details"
		/>
	</div>
</template>

<script>
	import Header from "./components/Header/Header.vue";
	import about from "./components/about/about.vue";
	
	export default {
		name: "app",
		components: {
			Header,
			about
		},
		data() {
			return {
				message: "Hello",
				users: [
					{
						name: "Camry",
						description: "Welcome to business class.",
						details: ["16 alloy wheels (10-spoke)", "Chrome insert on upper front grille", "Shark-fin antenna"],
						carImg: "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_4u3.jpg",
						altText: "Camry",
						linkMoreAbout: "https://www.toyota-europe.com/new-cars/camry/",
						variants: [{
								variantId: 1,
								variantColor: "#cd7f32",
								variantImg: "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_4u3.jpg"
							},
							{
								variantId: 2,
								variantColor: "#1d2739",
								variantImg: "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_1h2.jpg"
							},
							{
								variantId: 3,
								variantColor: "#cccfc4",
								variantImg: "https://images.toyota-europe.com/eu/product-token/3f015f85-889c-49de-a01d-438580f6af74/vehicle/81e97c80-f8d3-44b7-baf0-e602c3bae49b/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_1f7.jpg"
							}
						]
					},
					{
						name: "Land Cruiser",
						description: "Go. Anywhere.",
						details: ["Puddle lamps on door mirrors", "Power roof opening", "Moon roof"],
						carImg: "https://images.toyota-europe.com/eu/product-token/53fe61a6-bda4-4267-a331-d1146101f186/vehicle/539e2a72-0876-4fdf-af1c-5cf94b5d2dcc/width/555/height/277/padding/0/background-colour/fff/image-quality/70/day-exterior-27_221.jpg",
						altText: "Land Cruiser",
						linkMoreAbout: "https://www.toyota-europe.com/new-cars/land-cruiser/",
						variants: [{
								variantId: 1,
								variantColor: "#221c35",
								variantImg: "https://images.toyota-europe.com/eu/product-token/53fe61a6-bda4-4267-a331-d1146101f186/vehicle/539e2a72-0876-4fdf-af1c-5cf94b5d2dcc/width/555/height/277/padding/0/background-colour/fff/image-quality/70/day-exterior-27_221.jpg"
							},
							{
								variantId: 2,
								variantColor: "#7c573d",
								variantImg: "https://images.toyota-europe.com/eu/product-token/53fe61a6-bda4-4267-a331-d1146101f186/vehicle/539e2a72-0876-4fdf-af1c-5cf94b5d2dcc/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_4x4.jpg"
							},
							{
								variantId: 3,
								variantColor: "#a70042",
								variantImg: "https://images.toyota-europe.com/eu/product-token/53fe61a6-bda4-4267-a331-d1146101f186/vehicle/539e2a72-0876-4fdf-af1c-5cf94b5d2dcc/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_3r3.jpg"
							}
						]
					},
					{
						name: "Land Cruiser V8",
						description: "King of all Roads",
						details: ["Toyota Touch® 2 multimedia system", "Daytime running lights", "Cruise control"],
						carImg: "https://images.toyota-europe.com/eu/product-token/2ba43007-03d6-4849-ab07-0db1b2180d98/vehicle/efd9dd5d-d625-4768-8466-e666a3eba32d/width/555/height/277/padding/0/background-colour/fff/image-quality/70/day-exterior-27_218.jpg",
						altText: "Land Cruiser V8",
						linkMoreAbout: "https://www.toyota-europe.com/new-cars/land-cruiser-v8/",
						variants: [{
								variantId: 1,
								variantColor: "#000",
								variantImg: "https://images.toyota-europe.com/eu/product-token/2ba43007-03d6-4849-ab07-0db1b2180d98/vehicle/efd9dd5d-d625-4768-8466-e666a3eba32d/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_218.jpg"
							},
							{
								variantId: 2,
								variantColor: "#b2beb5",
								variantImg: "https://images.toyota-europe.com/eu/product-token/2ba43007-03d6-4849-ab07-0db1b2180d98/vehicle/efd9dd5d-d625-4768-8466-e666a3eba32d/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_1g3.jpg"
							},
							{
								variantId: 3,
								variantColor: "#eeebd9",
								variantImg: "https://images.toyota-europe.com/eu/product-token/2ba43007-03d6-4849-ab07-0db1b2180d98/vehicle/efd9dd5d-d625-4768-8466-e666a3eba32d/width/555/height/277/padding/0,0,0,0/background-colour/ffffff/day-exterior-27_070.jpg"
							}
						]
					},
				]
			};
		}
	};
</script>


<style>
	@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,800');

	#app {
		font-family: "Montserrat", sans-serif;		
		text-align: center;
		color: #000;
	}
</style>
