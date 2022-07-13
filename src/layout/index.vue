<template>
  <el-container>
    <el-aside width="auto">
      <AppAside></AppAside>
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-main>
        <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppAside from './AppAside'
import AppHeader from './AppHeader'
import AppMain from './AppMain'
export default {
  data() {
    return {}
  },
  created() {
    this.getNav()
    this.getUserInfo()
  },
  methods: {
    async getNav() {
      const response = await this.$store.dispatch('menu/menuList')
      console.log(response)
    },
    async getUserInfo() {
      const response = await this.$store.dispatch('user/getUserInfo')
      console.log(response)
    }
  },
  components: {
    AppAside,
    AppHeader,
    AppMain
  }
}
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  background-color: #18bc9c;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100vh;
  line-height: 200px;
  background-color: rgb(34, 45, 50);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  height: 100vh;
}
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
</style>
