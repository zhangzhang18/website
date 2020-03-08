import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/contact/Contact'
import Product from '@/components/product/Product'
import Products from '@/components/product/Products'
import News from '@/components/news/News'
import vueSwiper from 'vue-awesome-swiper'//根据package.json中的value导入
import 'swiper/dist/css/swiper.css'//引入样式
Vue.config.productionTip = false

Vue.use(vueSwiper)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
    ,
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})
