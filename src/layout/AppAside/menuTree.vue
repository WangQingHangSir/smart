<template>
  <div>
    <el-menu
      :default-active="$router.path"
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
      :style="{ width: isCollapse ? '60px' : '200px' }"
    >
      <ItemTree
        v-for="item in menuList"
        :key="item.id"
        :menus="item"
      ></ItemTree>
    </el-menu>
  </div>
</template>
<script>
import ItemTree from './ItemTree'
export default {
  name: 'menuTree',
  data() {
    return {}
  },
  components: {
    ItemTree
  },
  methods: {},
  computed: {
    menuList() {
      return this.$store.getters.menu
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  }
}
</script>
<style scoped lang="scss">
.el-menu {
  border-right: none;
  // background-color: $aside-bg-color;
}
</style>
