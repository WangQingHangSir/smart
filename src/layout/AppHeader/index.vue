<template>
  <div class="header">
    <div class="left">
      <el-button icon="el-icon-s-fold" @click="logoImg"></el-button>
      <TagsView></TagsView>
    </div>
    <div class="right">
      <el-avatar :size="40" :src="userInfo.avatar"></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userInfo.username
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personSetting">个人设置</el-dropdown-item>
          <el-dropdown-item command="logout">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import TagsView from '../../components/TagsView'
export default {
  name: 'index',
  data() {
    return {}
  },
  components: {
    TagsView
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'personSetting':
          this.personSetting()
          break
        case 'logout':
          this.handleLogout()
          break
      }
    },
    personSetting() {
      console.log(123)
    },
    async handleLogout() {
      console.log(111)
      await this.$store.dispatch('user/logout')
      await this.$store.dispatch('menu/logout')
    },
    logoImg() {
      this.$store.dispatch('menu/setIsCollapse')
    }
  },
  computed: {
    userInfo() {
      console.log(this.$store.getters.userInfo)
      return this.$store.getters.userInfo
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  display: flex;
  height: 60px;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .el-button {
      border: none;
      background: none;
      color: #ffffff;
      font-size: 25px;
      height: 60px;
      padding: 0;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .el-avatar {
      cursor: pointer;
      margin-right: 10px;
    }
    .el-dropdown-link {
      cursor: pointer;
      font-size: 18px;
      color: #ffffff;
    }
  }
}
</style>
