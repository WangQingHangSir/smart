<template>
  <div class="main">
    <Breadcrumb></Breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb'
export default {
  name: 'index',

  data() {
    return {}
  },
  created() {},
  mounted() {},
  components: {
    Breadcrumb
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
}
</style>
