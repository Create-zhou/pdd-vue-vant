<template>
    <div class='notFount'>
    <div class='pic'><img  width='100%' height='100%' src='https://www-cdn-res.shiguangkey.com/static/img/404.60320ab.png' alt></div>
    <div class='buttons'>
        <button @click="handleBack">返回上一级</button>
        <button  @click="handleindex">返回首页</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'NotFount',    
    methods:{
        handleBack(){
          this.$router.go(-1);
        },
        handleindex(){
         this.$router.replace({
             path:'/'
         })
        }
    }
}
</script>

<style scoped lang='less'>
.notFount{
    display:flex;
    height:100vh;
    justify-content: center;
    align-content: center;
      flex-wrap: wrap;
    .pic{
       width: 420px;
       height:420px;
      }
      .buttons{
          color:lightseagreen;
          width: 420px;
            display: flex;
            justify-content: space-between;
       button{
         border-radius: 10px;
          border: 1px solid lightseagreen;
          background: transparent;
          font-size: 30px;
          line-height: 50px;
           cursor: pointer;
       }
       :hover{
               background: turquoise;
           }
      }
}
</style>