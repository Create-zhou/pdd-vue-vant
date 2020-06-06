<template>
  <div class="goodsBuy">
    <div class="pic">
      <img
        width="100%"
        height="100%"
        src="//t00img.yangkeduo.com/goods/images/2019-04-11/8002afae-a339-4185-bf6f-69f1927482c9.jpg?imageMogr2/strip%7CimageView2/2/w/1300/a/80"
      />
    </div>
    <div class="info">
      <p class="price-group">
        <span>￥</span>
        <span>24.7</span>
      </p>
      <p class="title">这是谁的媳妇，24块钱领走</p>
      <van-divider />
      <p class="sms">
        <span>* 不包售后 *</span>
        <span>* 不包快递 *</span>
        <span>* 失踪不赔 *</span>
        <span>* 急速发货 *</span>
      </p>
          <van-divider />
      <div class="goodadd">
        <span>购买数量</span>
        <p class='number'>
            <van-button type="default">-</van-button>
             <van-button type="default">0</van-button>
            <van-button type="default">+</van-button>
        </p>
      </div>
        <van-divider />
    </div>
   <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click='gotoshopping'/>
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>
 
<script>
export default {
  name: "goodsBuy",
 methods:{ 
   gotoshopping(){
     this.$router.push('shopping')
   }
 }
};
</script>

<style scoped lang='less'>
.goodsBuy {
  .pic {
    width: 750px;
    height: 750px;
  }
  .info {
    padding: 0 20px;
    .price-group {
      font-size: 32px;
      color: darkred;
      font-weight: bold;
      margin-bottom: 20px;
      span:last-child {
        font-size: 36px;
      }
      u {
        font-style: normal;
        text-decoration: line-through;
      }
    }
    .title {
      font-size: 30px;
      font-weight: 700;
    }
    .sms {
      font-size: 30px;
      color: darkslategrey;
      margin-left: 5px;
    }
   .goodadd{
     display: flex;
     flex-wrap: nowrap;
      justify-content: space-between;
      font-size: 30px;
     .van-button{
        height:50px;
        width: 50px;
     }
   }
  }
   .van-goods-action{
     position: relative;
   }
}
</style>