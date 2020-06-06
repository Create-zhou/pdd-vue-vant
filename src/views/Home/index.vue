<template>
  <div class="home">
    <van-tabs
       animated	
      swipeable
      sticky 
      lazy-render
      @change='handleSwiper'
    >
      <van-tab
       v-for="(item,index) in tabgsBar" 
        :title='item.title'
       :key="index"
       :name='item.linkTo'
       >
       <router-view/>
       </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      tabgsBar: [ 
        { id: 1, title: "热门", linkTo: "hot" },
        { id: 2, title: "女装", linkTo: "Woment" },
        { id: 3, title: "鞋包", linkTo: "shoeBag" },
        { id: 4, title: "手机", linkTo: "phone" },
        { id: 5, title: "食品", linkTo: "food" },
        { id: 6, title: "母婴", linkTo: "infantMoom" },
        { id: 7, title: "男装", linkTo: "men" },
        { id: 8, title: "百货", linkTo: "department" },
        { id: 9, title: "内衣", linkTo: "underwear" },
        { id: 10, title: "电器", linkTo: "electric" },
        { id: 11, title: "家纺", linkTo: "textiles" },
        { id: 12, title: "水果", linkTo: "fruits" },
        { id: 13, title: "家具", linkTo: "furniture" },
        { id: 14, title: "美妆", linkTo: "makeup" },
        { id: 15, title: "家装", linkTo: "decoration" },
        { id: 11, title: "运动", linkTo: "exercise" },
        { id: 12, title: "车品", linkTo: "tasted" },
        { id: 13, title: "医药", linkTo: "medicine" },
        { id: 14, title: "电脑", linkTo: "computer" },
        { id: 15, title: "海淘", linkTo: "shopping" }
      ]
    };
  },
methods:{
   handleSwiper(linkTo,title){
         this.$router.push({
           name:linkTo
         })
   }
}
};
</script>
<style scoped>
.home {
  height: 100vh;
}
</style>