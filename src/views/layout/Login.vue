<template>
  <div class="login-container">
    <a-form-model
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="邮箱" prop="email">
        <a-input v-model="loginForm.email" type="" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input v-model="loginForm.password" type="password" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('loginForm')"> 登录 </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('loginForm')"> 重置 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import api from '../../api/user';

export default {
  data() {
    /* let checkPending; */
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('账号不能为空！'));
      } else {
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空！'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        password: '',
        email: '',
      },
      rules: {
        email: [{ validator: validatePass, trigger: 'change' }],
        password: [{ validator: validatePass2, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api
            .login(this.loginForm)
            .then((res) => {
              this.$message.success(res.msg);
              this.$router.push({
                name: 'Home',
              });
            })
            .catch((res) => {
              this.$message.error(res);
            });
          return true;
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  .login-form {
    width: 400px;
    height: 230px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #eee;
    padding: 24px 20px 0;
  }
}
</style>
