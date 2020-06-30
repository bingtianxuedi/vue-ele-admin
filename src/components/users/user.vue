<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户</el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row class="search-con">
      <el-col>
        <el-input placeholder="请输入内容" v-model="query" class="input-with-select searchInp">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData3" style="width: 100%" height="250">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="tel" label="电话" width="120"></el-table-column>
      <el-table-column prop="crateDate" label="创建日期" width="120">
        <!-- <template slot-scope="数据源">
              {{数据源获取crateDate | fmtdate}}
        </template>-->
      </el-table-column>

      <el-table-column prop="address" label="用户状态" width="120">
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-table-column>
      <el-table-column prop="zip" label="操作" width="120">
        <el-button style="padding:0" round="true" plain="true" type="warning" icon="el-icon-error"></el-button>
        <el-button
          style="padding:0"
          round="true"
          plain="true"
          type="primary"
          icon="el-icon-warning"
        ></el-button>
        <el-button
          style="padding:0"
          round="true"
          plain="true"
          type="success"
          icon="el-icon-success
"
        ></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: true,
      query: "",
      pageNum: 1,
      pageSize: 2,
      tableData3: [
        {
          name: "王小虎",
          tel: "111111111q",
          crateDate: "2020-1-12",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          name: "王小虎",
          tel: "111112222",
          crateDate: "2020-2-21",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  created() {
    this.getusersList();
  },
  methods: {
    getusersList() {
      //需要授权的API，必须在请求中设置Authorization，字段提供token令牌
      //   const AUTH_TOKEN = localStorage.getItem("token");
      //   this.$http.default.header.common["Authorization"] = AUTH_TOKEN;
      //   this.$http
      //     .get(
      //       "user?query=${this.query}&pageNum=${this.pageNum}&pageSize=${this.pageSize}"
      //     )
      //     .then(res => {
      //       console.log(res);
      //     });
    }
  }
};
</script>
<style lang="scss">
.search-con {
  margin-top: 30px;
}
.searchInp {
  width: 300px;
}
.el-main {
  text-align: left;
  line-height: 0;
}
</style>