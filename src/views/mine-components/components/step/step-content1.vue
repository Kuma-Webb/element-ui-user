<template>
  <div class="pane">
    <h1>第一个步骤内容</h1>
    <div style="text-align:center;margin-top:18px;">
      <el-button type="primary" @click="handleNextStep()">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepContent1',
  data() {
    return {

    }
  },
  methods: {
    // 点击下一步
    handleNextStep() {
      this.$emit('handleNextStep')
    }
  }
}
</script>

<style scoped>

</style>
