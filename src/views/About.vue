<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
Vue.use(Button);

export default {
  name: "Button",
  created() {
    console.log(Button);
  },
  // components: { "a-button": Button },
};
</script>
