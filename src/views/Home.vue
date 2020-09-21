<template>
  <div class="chart">
    <div class="title">{{ msg }}</div>
    <div class="content">
      <a-row :gutter="20">
        <a-col :lg="24" :xl="12" :xxl="7">
          <div class="grid-content bg-purple">
            <OneChart />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="10">
          <div class="grid-content bg-purple">
            <TwoChart />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="7">
          <div class="grid-content bg-purple">
            <ThreeChart />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="7">
          <div class="grid-content bg-purple">
            <FourChart />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="10">
          <div class="grid-content bg-purple">
            <FiveChart />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="7">
          <div class="grid-content bg-purple">
            <SixChart />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { Row, Col } from "ant-design-vue";
import OneChart from "./chart/oneChart.vue";
import TwoChart from "./chart/twoChart.vue";
import ThreeChart from "./chart/threeChart.vue";
import FourChart from "./chart/fourChart.vue";
import FiveChart from "./chart/fiveChart.vue";
import SixChart from "./chart/sixChart.vue";

export default {
  name: "Home",
  components: {
    "a-row": Row,
    "a-col": Col,
    OneChart,
    TwoChart,
    ThreeChart,
    FourChart,
    FiveChart,
    SixChart,
  },
  data() {
    return {
      msg: "电子库房智能化平台",
    };
  },
};
</script>
<style>
.chart {
  width: 100%;
  min-height: calc(100vh - 84px);
  background-color: #2a2c46;
}
.chart .title {
  height: 70px;
  background-color: #232747;
  color: #ffffff;
  font-size: 36px;
  line-height: 70px;
  text-align: center;
  box-shadow: 5px 5px 5px #1a1313;
  margin: 0px auto 10px auto;
}
.chart .content {
  padding: 0 30px;
  color: #ffffff;
}
.grid-content {
  border: 3px solid #424262;
  border-radius: 3px;
  margin-top: 30px;
}
</style>
