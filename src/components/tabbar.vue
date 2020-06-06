<template>
    <van-tabbar v-model="active" 
    @change="handleSwitch"
    route
    >
      <van-tabbar-item 
      v-for="item in tabbar"
      :key="item.id"
      :name="item.linkTo" 
      :icon="item.icon"
      replace
      :to="item.linkTo"
      >
    {{item.name}}
      </van-tabbar-item>
    </van-tabbar>
</template>>
<script>
export default {
    name:'tabbar',
    methods:{
      handleSwitch(){
          this.$router.push({
            path:'/'+this.active
          })
      }
    },
      data() {
    return {
      active: 0,
      tabbar: [
        { id: 1, name: "首页", icon: "home-o", linkTo: "Home" },
        { id: 2, name: "推荐", icon: "goods-collect-o", linkTo: "recomend" },
        { id: 3, name: "购物车", icon: "shopping-cart-o", linkTo: "shopping" },
        { id: 4, name: "聊天", icon: "chat-o", linkTo: "chat" },
        { id: 5, name: "个人中心", icon: "user-circle-o", linkTo: "user" }
      ]
    };
  },

}
</script>>
<style scoped>

</style>>