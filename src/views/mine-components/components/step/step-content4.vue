<template>
  <div class="pane">
    <h1>第四个步骤内容</h1>
    <div style="text-align:center;margin-top:18px;">
      <el-button type="primary" @click="handleLastStep()">上一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepContent4',
  data() {
    return {

    }
  },
  methods: {
    // 点击上一步
    handleLastStep() {
      this.$emit('handleLastStep')
    }
  }
}
</script>

<style scoped>

</style>
