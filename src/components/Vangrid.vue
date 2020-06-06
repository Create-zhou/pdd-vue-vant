<template>
    <div class="vangrid">
        <van-grid clickable>
            <van-grid-item
              v-for="(item,index) in categorys.page1"
              :key="index"
              icon="photo-o"
              :text="item.title"
            />
        </van-grid>
    </div>
</template>

<script>
export default {
    name:'vangrid',
    data() {
    return {
      categorys: {
        page1: [
          { id: 1, title: "限时秒杀", linkTo: "", img: "" },
          { id: 2, title: "断码清仓", linkTo: "", img: "" },
          { id: 3, title: "新衣馆", linkTo: "", img: "" },
          { id: 4, title: "多多果园", linkTo: "", img: "" },
          { id: 5, title: "9块9特卖", linkTo: "", img: "" },
          { id: 6, title: "充值中心", linkTo: "", img: "" },
          { id: 7, title: "医药馆", linkTo: "", img: "" },
          { id: 8, title: "现金签到", linkTo: "", img: "" }
        ],
      }
    };
}
}
</script>

<style scoped lang='less'>
 
</style>