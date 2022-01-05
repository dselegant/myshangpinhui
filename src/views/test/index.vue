<template>
  <div class="register-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="96px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号:" prop="phone">
        <el-input
          v-model="ruleForm.phone"
          type="number"
          autofocus
          autocomplete
        ></el-input>
        <!-- style="width: 270px; height: 38px" -->
      </el-form-item>
      <el-form-item label="验证码:" prop="code">
        <el-input v-model="ruleForm.code" type="number" autocomplete></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password" autocomplete>
        <el-input
          v-model="ruleForm.password"
          show-password
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="repassword">
        <el-input
          v-model="ruleForm.repassword"
          show-password
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox
          v-model="ruleForm.agree"
          label="同意协议并注册《尚品汇用户协议》"
        ></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="danger">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据对象
      ruleForm: {
        phone: '',
        code: '',
        password: '',
        repassword: '',
        agree: false
      },
      rules: {
        phone: [
          { required: true, message: '请输入你的手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度为6个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度为6到20个字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度为6到20个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.register-container {
  display: flex;
  justify-content: center;
  .el-form {
    // background-color: #bfc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 100px;
    .el-input {
      width: 270px;
      height: 38px;
    }
  }
}
</style>