<template>
	<div id="app">
		<pulse-loader v-if="loading"></pulse-loader>
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
				loading: false,
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
			async makeRequest() {
					this.loadStart()
				axios.get(encodeURI(this.createUri())).then(r => (
					this.item = r.data.data,
					this.loadStop()
				)).catch(err => {
					(error) => {
						this.state.loading = false,
						this.loadStop()
						console.log(error)
					}
				})
			}
		},
		mounted() {
				this.makeRequest()
		}
}
</script>
