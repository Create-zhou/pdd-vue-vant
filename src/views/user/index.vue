<template>
    <div class='user'>
        <div class='from'>
<van-cell-group>
  <van-field
    v-model="username"
    error
    required
    label="用户名"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="phone"
    required
    label="手机号"
    placeholder="请输入手机号"
  />
  <van-field
  v-model="sms"
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
>
  <template #button>
    <van-button size="small" type="primary">发送验证码</van-button>
  </template>
</van-field>
</van-cell-group>
 </div>
<button class='zhuche'>点击注册</button>
    </div>
</template>
<script>
export default{
    name:'User',
    data(){
        return {
            username:'',
            phone:'',
            sms:''
        }
    }
}
</script>
<style scoped lang='less'>
   .user{
       height:100vh;
       display:flex;
       justify-content: center;
       align-content: center;
       background: chocolate;
       flex-wrap: wrap;
      .zhuche{
         width:100%;
         border-radius: 10px;
          border: 1px solid lightseagreen;
          background: transparent;
          font-size: 50px;
          line-height: 50px;
           cursor: pointer;
       }
       :hover{
               background: turquoise;
           }
      } 
</style>