import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '../../dist/element.css'
import ElementUI from 'element-ui'

const rtx = require.context('./components', true, /\.vue$/)

rtx.keys().forEach((key) => {
  const component = rtx(key).default
  Vue.component(component.name, component)
})

Vue.use(ElementUI)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
