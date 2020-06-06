import Vue from 'vue'
import App from './App.vue'
import'amfe-flexible'
import router from './router'
import store from './store'
import './plugins/vant.js'
import { Tabbar, TabbarItem,Icon,Tab,Tabs,Swipe, 
  SwipeItem , Lazyload,
  Grid, GridItem,Card,
  Field ,Toast,button,
  CellGroup,Cell,Divider ,
  GoodsAction, GoodsActionIcon, GoodsActionButton
} from 'vant';

Vue.use(Tabbar)
.use(TabbarItem).use(Icon).use(Tab)
.use(Tabs) .use(Swipe).
use(SwipeItem) .use(Lazyload)
Vue.use(Grid).use(GridItem).use(Card )
.use(Field).use(Toast )
.use(button).use(CellGroup).use(Cell)
.use(Divider).use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

import GoodList from'../src/components/GoodList'
import Vangrid from '../src/components/Vangrid'
Vue.component('GoodList',GoodList)
Vue.component('Vangrid',Vangrid)


//关闭生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
