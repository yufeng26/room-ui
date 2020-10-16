<template>
  <div id="sixEcharts" :style="{ width: '100%', height: '300px' }" />
</template>

<script>
// import echarts from "echarts";
// require("echarts/theme/macarons"); // echarts theme

export default {
  name: "SixChart",
  data() {
    return {
      chart: "linkToHelloWorld"
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {},
  methods: {
    // 初始化图表
    initChart() {
      var dom = document.getElementById("sixEcharts");
      var myChart = this.echarts.init(dom);
      var option = {
        title: {
          text: "容量统计",
          textStyle: {
            color: "#fff",
            left: "left",
            fontSize: 14
          },
          top: 10,
          left: 20
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#3cc5a3", "#ffc000", "#61a0a9", "#d58164", "#91c8ae"],
        legend: {
          // orient: "vertical",
          left: "center",
          data: ["已使用", "未使用"],
          textStyle: {
            color: "#fff"
          },
          top: 10
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            selectedMode: "single",
            avoidLabelOverlap: false,
            hoverAnimation: true,
            hoverOffset: 20,
            selectedOffset: 10,
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },

            data: [
              { value: 60, name: "已使用" },
              { value: 40, name: "未使用" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["41%", "43%"],
            avoidLabelOverlap: false,
            hoverAnimation: true,
            hoverOffset: 0,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 60,
                name: "已使用",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#3cc5a3" } // 鼠标移入颜色
                }
              },
              {
                value: 40,
                name: "未使用",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#ffc000" } // 鼠标移入颜色
                }
              }
            ]
          }
        ]
      };
      // 绘制图表
      myChart.setOption(option);
      myChart.on("mouseover", function(params) {
        console.log(params);
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 1,
          dataIndex: params.dataIndex
        });
        option.series[0].data[params.dataIndex].selected = true;
        // myChart.clear();
        myChart.setOption(option);
      });
      myChart.on("mouseout", function(params) {
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 1,
          dataIndex: params.dataIndex
        });
        option.series[0].data[params.dataIndex].selected = false;
        // myChart.clear();
        myChart.setOption(option);
      });
    }
  }
};
</script>
