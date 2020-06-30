<template>
  <div class="container">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="5">
            <div class="grid-content bg-purple">img</div>
          </el-col>
          <el-col :span="17">
            <div class="grid-content bg-purple-light fontstyle">电商后台管理系统</div>
          </el-col>
          <el-col :span="2">
            <div @click.prevent='handelCancle()' class="grid-content bg-purple">退出</div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
              <el-menu router
                default-active="1"
                :unique-opened='true'
                :route='true'
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="users">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航2</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航3</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate(){
    //   const token =localStorage.getItem('token');
    //   if(!token){
    //       this.$router.push({name:'login'})
    //   }
  },
  methods:{
      handelCancle(){
          localStorage.clear();
          this.$message.success("退出成功");
          this.$router.push({name:"login"})
      }
  }
};
</script>
<style lang="scss">
.container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 90vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.fontstyle {
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
}
</style>