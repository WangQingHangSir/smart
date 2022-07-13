<template>
  <div>
    <!-- 搜索栏 -->
    <div class="search">
      <div><span>用户</span></div>
      <div class="input"><el-input placeholder="请输入内容"></el-input></div>
      <div>
        <el-button type="success" icon="el-icon-search" @click="search"
          >搜索</el-button
        >
      </div>
      <div class="right">
        <el-button type="primary" icon="el-icon-search">新增</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border align="center">
      <el-table-column type="index" label="序号" width="50" align="center">
      </el-table-column>
      <el-table-column prop="username" label="用户名" align="center">
      </el-table-column>
      <el-table-column prop="avatar" label="头像" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" class="img" />
        </template>
      </el-table-column>
      <el-table-column prop="roles" label="角色" align="center">
        <template slot-scope="scope">
          <el-tag v-for="(item, index) in scope.row.roles" :key="index">{{
            item.name
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" align="center">
      </el-table-column>
      <el-table-column prop="createTime" label="注册时间" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" @click="handleAssign(scope.$index, scope.row)"
            >分配权限</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import UserApi from '@/api/user'
export default {
  name: 'SmartIndex',

  data() {
    return {
      tableData: [],
      userForm: {
        username: '',
        size: '',
        current: ''
      },
      size: 20,
      total: 0,
      page: 1
    }
  },

  mounted() {},
  created() {
    this.getUserlist()
  },
  methods: {
    async getUserlist() {
      const response = await UserApi.getUserList(this.userForm)
      console.log(response)
      this.current = response.data.data.current
      this.size = response.data.data.size
      this.total = response.data.data.total
      this.tableData = response.data.data.records
    },
    // 每页条数
    handleSizeChange(size) {
      this.size = size
      this.getUserlist()
    },
    // 当前页
    handleCurrentChange(page) {
      this.page = page
      this.getUserlist()
    },
    // 编辑
    handleEdit() {
      console.log(11111111)
    },
    // 分配权限
    handleAssign() {
      console.log(2222)
    },
    // 删除
    handleDelete() {
      console.log(3333)
    },
    // 搜索
    search() {
      this.page = 1
      this.size = 1
      this.getUserlist()
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 20px;
  position: relative;
  margin-bottom: 10px;
  .input {
    margin: 0 10px;
  }
  .right {
    position: absolute;
    top: -10px;
    right: 20px;
  }
}
.img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
