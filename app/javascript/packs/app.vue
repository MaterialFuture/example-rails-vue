<template>
  <div id="app">
   <p>{{ message }}</p>
   <p>{{ ip }}</p>
			
  </div>
</template>

<script>
	export default {
		props: ["ip"],
  data() {
    return {
     message: "Hello Vue!",
    }
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
