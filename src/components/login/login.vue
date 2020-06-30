<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formLabelAlign">
      <h1>用户登陆</h1>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn" type="primary">登陆</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      this.$http.post("login", this.formLabelAlign).then(res => {
        // console.log(res);
        const {
          data,
          meta: { msg, status }
        } = res.data;
        // 登陆成功
        if(status===200){
          // 实现跳转
          //利用token值来进行判断是否登陆过，的跳转
          localStorage.setItem('token',data.token)
          this.$router.push({name:'home'})
           this.$message.success(msg);
        }else{
          //登陆不成功提示
          this.$message.warning(msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>