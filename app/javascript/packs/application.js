import Vue from 'vue';
import App from './app.vue';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('app-test')
  const props = JSON.parse(node.getAttribute('data'))
  new Vue({
    render: h => h(App, { props })
  }).$mount('#app-test');
})
