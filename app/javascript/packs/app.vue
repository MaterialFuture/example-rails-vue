<template>
	<div id="app">
		<div v-if="loading">
			<pulse-loader></pulse-loader>
			<p>Loading...</p>
		 <i>Hint: The loading is delayed</i>
		</div>
		<div v-else>
			<div>
				<h2>{{ item.name }}</h2>
				<img :src="item.image_url" :alt="item.name" />
			</div>
			<div>
				<span>Click URL:</span> 
				<a :href="item.click_url">visit product page</a>
			</div>
			<div>
				<span>Price: ${{ item.shipping_and_handling.price }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

	const protocol ="http://",
							url = "track.clickbooth.com/"
	export default {
		components: {
			PulseLoader
		},
		props: [
			"ip",
			"agent"
		],
		data() {
			return {
				message: "Hello Vue!",
				item: [],
				loading: true,
			}
		},
		methods: {
			createUri() {
				let uri_id = "11851"
				const request_uri = protocol + url + "i?lid=" + uri_id + "&ua=​" + this.agent + "​&ip" + this.ip + "&subid1=&subid2=&subid3=&subid4=&subid5="
				return request_uri.toString()
			},
			loadStart() {
				this.loading = true
			},
			loadStop() {
				this.loading = false
			},
			makeRequest() {
				axios.get(encodeURI(this.createUri())).then(r => (
					this.item = r.data.data
				)).catch(err => {
					(error) => {
						this.state.loading = false
						console.log(error)
					}
				})
			}
		},
		mounted() {
				this.loading = true
			setTimeout(() => {
				this.makeRequest()
				console.log("niggerfaggot")
			}, 2500);
				this.loadStop()
		}
}
</script>
