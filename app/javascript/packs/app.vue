<template>
	<div id="app">
			<p>debug: {{ item }}</p>
			<div>
				<h2>{{ item.name }}</h2>
				<img :src="item.image_url" :alt="item.name" />
			</div>
			<div>
				<span>Click URL:</span> 
				<a :href="item.click_url">visit product page</a>
			</div>
			<div>
				<span>Price: {{ item.shipping_and_handling.currency }}{{ item.shipping_and_handling.price }}</span>
			</div>
	</div>
</template>

<script>
	import axios from "axios"

	const protocol ="http://",
							url = "track.clickbooth.com/"
	export default {
		props: [
			"ip",
			"agent"
		],
  data() {
    return {
     message: "Hello Vue!",
					item: []
    }
  },
		methods: {
			createUri() {
				let uri_id = "11851"
				const request_uri = protocol + url + "i?lid=" + uri_id + "&ua=​" + this.agent + "​&ip" + this.ip + "&subid1=&subid2=&subid3=&subid4=&subid5="
				return request_uri.toString()
			},
			makeRequest() {
				axios.get(encodeURI(this.createUri())).then(r => (
					this.item = r.data.data,
					(err) => {
						console.log(err)
					}
				))
			}
		},
		mounted() {
			this.makeRequest();
		}
}
</script>
