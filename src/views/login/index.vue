<template>
  <div class="login">
    <h1>智慧服务平台</h1>
    <div class="login-main">
      <h5>欢迎登录</h5>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入用户名"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
            suffix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify">
            <el-input
              v-model.trim="ruleForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <el-image :src="img" @click.stop="handleImg" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-button"
            @click="handleSubmit('ruleForm')"
            :loading="loadingStatus"
            >{{ loadingStatus ? '加载中...' : '立即登录' }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import UserApi from '@/api/user'
export default {
  name: 'index',
  data() {
    return {
      loadingStatus: false,
      img: '',
      ruleForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.handleGetCaptcha()
  },
  methods: {
    // 登录
    handleSubmit(ruleForm) {
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          // const response = await UserApi.login(this.ruleForm)
          const response = await this.$store.dispatch(
            'user/login',
            this.ruleForm
          )
          if (!response.data.data) return

          console.log(this.loadingStatus)
          this.$notify({ title: '提示', message: '登录成功', type: 'success' })
          this.loadingStatus = true
          await this.$router.push('/')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 获取验证码
    async handleGetCaptcha() {
      const response = await UserApi.getCaptcha()
      this.ruleForm.token = response.data.data.token
      this.img = response.data.data.captchaImg
    },
    // 更新验证码
    handleImg() {
      this.code = ''
      this.handleGetCaptcha()
    }
  }
}
</script>
<style scoped lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Verdana;
  background: url('../../assets/images/bg.jpg') no-repeat 0 0;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
  color: #fff;
  h1 {
    text-align: center;
    font-size: 42px;
    margin-top: 50px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  .login-main {
    margin: 10% auto 13%;
    width: 20%;
    h5 {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 30px;
    }
  }
}
.login-button {
  width: 100%;
  background: #f56c6c;
  border: none;
}
.verify {
  width: 100%;
  display: flex;
  align-items: center;
}
.el-image {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
