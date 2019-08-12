<template>
  <div :style="{minHeight:cHeight+'px',overflow:'auto'}">
    <el-form :model="form" status-icon="" :rules="rules" ref="systemForm" label-width="100px" label-position="left">
      <el-form-item label="系统抽成：" prop="systemNum">
        <el-input v-model.number="form.systemNum"></el-input>
      </el-form-item>
      <el-form-item label="推荐抽成：" prop="remNum">
        <el-input v-model="form.remNum"></el-input>
      </el-form-item>
      <el-form-item label="短信接口1：" prop="message1">
        <el-input v-model="form.message1"></el-input>
      </el-form-item>
      <el-form-item label="短信接口2：" prop="message2">
        <el-input v-model="form.message2"></el-input>
      </el-form-item>
      <el-form-item label="短信接口3：" prop="message3">
        <el-input v-model="form.message3"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('systemForm')">修 改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "setting",
    data() {
      return {
        form: {
          systemNum: '',
          remNum: '',
          message1: '',
          message2: '',
          message3: '',
        },
        rules: {
          systemNum: [
            {required: true, message: '请输入系统抽成', trigger: 'blur'},
            {type: 'number', message: '请输入数字', trigger: 'blur'}
          ],
          remNum: [{required: false, message: '请输入系统抽成', trigger: 'blur'}],
          message1: [{required: false, message: '请输入系统抽成', trigger: 'blur'}],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        })
      }

    },
    computed: {
      cHeight() {
        return this.$store.state.contentHeight
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-form {
    width: 400px;
    max-width: 100%;

    .el-input {
      min-width: 200px;
    }
  }
</style>
