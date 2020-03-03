<template>
  <div class="main">
    <el-steps :active="active" finish-status="success">
      <el-step
        v-for="(item,index) of stepTitle"
        :key="index"
        :title="item"
        :class="stepClassObj(index)"
        @click.native="handleStep(index)"
      />
    </el-steps>
    <!-- 内容展示区 -->
    <step-content1
      v-show="active === 0 "
      @handleNextStep="handleNextStep()"
    />
    <step-content2
      v-show="active === 1 "
      @handleLastStep="handleLastStep()"
      @handleNextStep="handleNextStep()"
    />
    <step-content3
      v-show="active === 2 "
      @handleLastStep="handleLastStep()"
      @handleNextStep="handleNextStep()"
    />
    <step-content4
      v-show="active === 3 "
      @handleLastStep="handleLastStep()"
    />
  </div>
</template>

<script>
import StepContent1 from '@/views/mine-components/components/step/step-content1'
import StepContent2 from '@/views/mine-components/components/step/step-content2'
import StepContent3 from '@/views/mine-components/components/step/step-content3'
import StepContent4 from '@/views/mine-components/components/step/step-content4'

export default {
  name: 'Step',
  components: { StepContent1, StepContent2, StepContent3, StepContent4 },
  data() {
    return {
      // 步骤
      active: 0,
      // 已选步骤
      stepSuc: [0],
      // 步骤标题
      stepTitle: ['步骤一', '步骤二', '步骤三', '步骤四']
    }
  },
  computed: {
    // 动态给步骤加样式
    stepClassObj(val) {
      return (val) => {
        return {
          stepSuc: this.stepSuc.includes(val),
          stepErr: !this.stepSuc.includes(val)
        }
      }
    }
  },
  methods: {
    // 点击步骤条
    handleStep(val) {
      if (this.stepSuc.includes(val) === true) {
        this.active = val
      }
    },
    // 组件点击上一步
    handleLastStep() {
      if (--this.active === 0) { this.active = 0 }
    },
    // 组件点击下一步
    handleNextStep() {
      this.stepSuc.push(++this.active)
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 18px 12px 16px
}

/deep/ .pane {
  margin-top: 18px;
  padding: 18px 12px 16px;
  background-color: #cccccc;
}

.stepSuc :hover{
  cursor: pointer;
}

.stepErr :hover{
  cursor: not-allowed;
}
</style>
