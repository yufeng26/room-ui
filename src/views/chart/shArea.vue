<template>
  <div id="shArea" :style="{ width: '100%', height: '655px' }" />
</template>

<script>
import geoJson from "./ShangHai.json";
// require("echarts/theme/macarons"); // echarts theme
console.log(geoJson);
export default {
  name: "shArea",
  data() {
    return {
      chart: "linkToHelloWorld"
    };
  },
  mounted() {
    this.initChart();
    this.timer = setInterval(this.initChart, 10000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // 产生随机数
    prodshuzi(maxNum, minNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    },
    // 初始化图表
    initChart() {
      var dom = document.getElementById("shArea");
      var myChart = this.echarts.init(dom);
      this.echarts.registerMap("ShangHai", geoJson);
      var data = [{ name: "崇明区", value: 33 }];
      var geoCoordMap = {
        崇明区: [121.5637, 31.5383]
      };
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      // 绘制图表
      myChart.setOption({
        title: {
          text: "上海16区法院分布图 （2020.4）",
          subtext: "数据来自http://datav.aliyun.com/"
        },
        bmap: {},
        series: [
          {
            name: "",
            type: "map",
            mapType: "ShangHai", // 自定义扩展图表类型
            itemStyle: {
              areaColor: "#1e2353",
              borderColor: "#6c15b1",
              shadowOffsetX: 1,
              shadowOffsetY: 1,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              shadowBlur: 5
            },
            coordinateSystem: "bmap",
            data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            encode: {
              value: 2
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            zlevel: 1
          }
        ]
      });
    }
  }
};
</script>
