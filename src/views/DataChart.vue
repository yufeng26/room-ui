<template>
  <div class="chartBox">
    <h2 v-text="msg"></h2>
    <a-row type="flex">
      <a-col :flex="1">板块一</a-col>
      <a-col :flex="1">板块二</a-col>
      <a-col :flex="1">板块三</a-col>
    </a-row>
    <a-row type="flex">
      <a-col :flex="1">板块4</a-col>
      <a-col :flex="1">板块5</a-col>
      <a-col :flex="1">板块6</a-col>
    </a-row>
  </div>
</template>

<script>
import { Row, Col } from "ant-design-vue";
export default {
  name: "chartBox",
  components: {
    "a-row": Row,
    "a-col": Col
  },
  data() {
    return {
      msg: "电子库房智能化平台"
    };
  }
};
</script>

<style></style>
