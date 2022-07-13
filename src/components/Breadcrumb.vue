<template>
  <div class="breadcrumb">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      v-if="this.$route.path !== '/'"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="(item, index) in $route.matched">
        <el-breadcrumb-item :to="{ path: item.path }" :key="index">
          <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
``
<script>
export default {
  name: 'SmartBreadcrumb',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
</style>
