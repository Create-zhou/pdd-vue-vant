<template>
  <div class="hot">
    <div class="bananer">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue">
        <van-swipe-item v-for="(item,index) in bananer" :key="index">
          <img :src="item" alt width="100%" height="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="swiper-container" ref="swipercontainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in categorys.page" :key="index" >
          <van-grid clickable>
            <van-grid-item
              v-for="item in categorys[categorys.page[index]]"
              :key="item.id"
              icon="photo-o"
              :text="item.title"
                @click='handleBuy'
            />
          </van-grid>
        </div>
      </div>
    </div>

    <div class="swiper-scrollbar"></div>
    <div class="hotlist">
      <van-card
        v-for="(item,index ) in 5"
        :key="index"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "hot",
  data() {
    return {
      bananer: [
        "https://t16img.yangkeduo.com/pdd_oms/2019-06-30/fcbe21a01dfdbbf2c1889ffae4a7627f.jpg?imageView2/2/w/750/q/80",
        "https://t00img.yangkeduo.com/goods/2020-05-28/c5f9ed8f313fa8f51d3a1a56eb5c9494.jpeg?imageMogr2/sharpen/50%7CimageView2/2/w/750/q/80/format/webp",
        "https://t00img.yangkeduo.com/goods/2019-11-20/0c7cbcf6a07241f8ac9feea5002a498e.jpeg?imageMogr2/sharpen/50%7CimageView2/2/w/750/q/80/format/webp",
        "https://t00img.yangkeduo.com/goods/2020-05-28/c5f9ed8f313fa8f51d3a1a56eb5c9494.jpeg?imageMogr2/sharpen/50%7CimageView2/2/w/750/q/80/format/webp"
      ],
      categorys: {
        page: ["page1", "page2"],
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
        page2: [
          { id: 9, title: "多多赚大钱", linkTo: "", img: "" },
          { id: 10, title: "电器城", linkTo: "", img: "" },
          { id: 11, title: "限时秒杀", linkTo: "", img: "" },
          { id: 12, title: "限时秒杀", linkTo: "", img: "" },
          { id: 13, title: "限时秒杀", linkTo: "", img: "" },
          { id: 14, title: "限时秒杀", linkTo: "", img: "" }
        ]
      }
    };
  },
  methods: {
    handleBuy() {
      this.$router.push({
      name:'goodsBuy'
      })
    }
  },
  mounted() {
    const ele = this.$refs.swipercontainer;
    var mySwiper = new Swiper(ele, {
      //可选选项，自动滑动
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
    mySwiper.scrollbar.$el.css("height", "2px"),
      mySwiper.scrollbar.$el.css("width", "100px"),
      mySwiper.scrollbar.$dragEl.css("background", "#ff6600");
    mySwiper.scrollbar.updateSize();
  }
};
</script>

<style scoped lang='less'>
.hot {
  .bananer {
    height: 280px;
    overflow: hidden;
  }
  .swiper-scrollbar {
    left: calc(50% - 50px);
  }
  .van-card__content {
    justify-content: space-around;
  }
  .van-card:not(:first-child) {
    margin-top: 1px;
  }
}
</style>