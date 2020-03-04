<template>
  <div class="pane">
    <h1>第一个步骤内容</h1>
    <div>
      <el-table :data="tableData" border stripe>
        <el-table-column label="用户姓名" prop="userName" />
        <el-table-column label="类型值">
          <template slot-scope="scope">{{ typeDesc(scope.row.typeCode) }}</template>
        </el-table-column>
      </el-table>
    </div>
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
      tableData: [
        { userName: '张三', typeCode: '1' },
        { userName: '李四', typeCode: '2' }
      ],
      typeOption: [
        { label: '类型一', value: '1' },
        { label: '类型二', value: '2' }
      ]
    }
  },
  computed: {
    typeDesc(val) {
      return (val) => {
        const target = this.typeOption.find(i => i.value === val)
        return target ? target.label : ''
      }
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
