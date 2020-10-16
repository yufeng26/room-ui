<template>
  <div id="fourEcharts" :style="{ width: '100%', height: '300px' }" />
</template>

<script>
// import echarts from "echarts";
// require("echarts/theme/macarons"); // echarts theme

export default {
  name: "FourChart",
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
      var dom = document.getElementById("fourEcharts");
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
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} <br/>{b}: {c} ({d}%)"
        // },
        color: ["#10e5ff", "#ffb311", "#706dc4", "#18cf91", "#f73c64"],
        legend: {
          // orient: 'vertical',
          right: 20,
          top: 10,
          data: ["盘柱1", "盘柱2", "盘柱3", "盘柱4", "盘柱5"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "56%"],
            selectedMode: "single",
            avoidLabelOverlap: false,
            hoverAnimation: true,
            hoverOffset: 8,
            selectedOffset: 6,
            label: {
              show: true,
              fontSize: "16",
              fontWeight: "bold",
              formatter: "{b}:({d}%)"
            },
            data: [
              { value: 335, name: "盘柱1" },
              { value: 310, name: "盘柱2" },
              { value: 234, name: "盘柱3" },
              { value: 135, name: "盘柱4" },
              { value: 300, name: "盘柱5" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["32%", "34%"],
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
                value: 335,
                name: "盘柱1",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#10e5ff" } // 鼠标移入颜色
                }
              },
              {
                value: 310,
                name: "盘柱2",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#ffb311" } // 鼠标移入颜色
                }
              },
              {
                value: 234,
                name: "盘柱3",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#706dc4" } // 鼠标移入颜色
                }
              },
              {
                value: 135,
                name: "盘柱4",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#18cf91" } // 鼠标移入颜色
                }
              },
              {
                value: 300,
                name: "盘柱5",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#f73c64" } // 鼠标移入颜色
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
