<template>
  <div class="search">
   <div> <span>用户</span></div>
   <div class="input"> <el-input  placeholder="请输入内容"></el-input></div>
  <div>  <el-button type="success" icon="el-icon-search">搜索</el-button></div>
  <div class="right">  <el-button type="primary" icon="el-icon-search">新增</el-button></div>
  </div>
</template>

<script>
export default {
  name: 'SmartIndex',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.search{
  display: flex;
  align-items: center;
  height: 50px;
  padding: 20px;
  position: relative;
  .input{
    margin: 0 10px;
  }
  .right{
   position: absolute;
   top: -10px;
   right: 20px;
  }
}
</style>
