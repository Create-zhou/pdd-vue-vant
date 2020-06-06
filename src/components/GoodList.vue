<template>
    <div class='goodlist'>
          <ul>
      <li v-for="(item,index) in 100" :key="index">
          <div class='pic'>
              <img v-lazy='img' width='100%' height='100%' alt=''>
          </div>
          <p class='title'>夏季气质新款拼接印花丝巾系带衬衫+高腰阔腿短裤两件套装女</p>
        <div class='info'>
          <p>
               <span class='symbol'>￥</span>
               <span class='price'>55.89</span>
          </p>
            <span class='shopping'>点击购买</span>
        </div>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
    name: "goodlist",
  data(){
      return {
          img:'https://t00img.yangkeduo.com/goods/images/2020-04-22/541f2c92-ce24-4abf-96d4-5461535d1c5d.jpg?imageMogr2/sharpen/50%7CimageView2/2/w/400/q/80/format/webp'
      }
  }
}
</script>



<style scoped lang='less'>
.goodlist{
    position: relative;
     ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 372px;
      height: 540px;
      margin-bottom: 1px;
      .pic{
        height:370px;
      }
      .title{
          height:54px;
          overflow: hidden;
          font-size: 22px;
          line-height: 54px;
          white-space: nowrap;
          text-overflow: ellipsis;
      }
      .info{
          display:flex;
          justify-content: space-around;
          color:red;
           flex-wrap: wrap;
          .symbol{
              font-size: 12px;
               line-height:150px;

          }
          .price{
               font-size: 30px;
          }
          .shopping{
             height:40px;
              font-size:30px;
              line-height: 135px;
              
          }
          p{
             margin-right:113px;
          }
          .you{
              font-size: 30px;
          }
      }

    }
  }
}

</style>