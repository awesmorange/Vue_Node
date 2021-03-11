<template>
  <div id="page">
    <div id="basicChart"></div>
  </div>
</template>
<script>
const echarts = require('echarts')
export default {
  name: 'BasicChart',
  data() {
    return {
    }
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      const chartDom = document.getElementById('basicChart')
      const myChart = echarts.init(chartDom)
      const option = {
        title: {
          text: 'SALE SUMMARY',
          subtext: 'this is a title',
          left: 'left',
          top: 'top',
          textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'bolder',
            fontFamily: 'sans-serif',
            fontSize: 22
          }
        },
        legend: {},
        toolbox: {},
        tooltip: {},
        dataZoom: [],
        visualMap: {},
        xAxis: {},
        yAxis: {},
        dataset: {
          source: [
            ['Mon', 'Money', 'Number', 'type', 'percent' ],
            ['Jan', 34, 20, 'xx', 12 ],
            ['Feb', 28, 14, 'yy', 42 ],
            ['Mar', 45, 32, 'zz', 46 ],
            ['Apr', 69, 46 ],
            ['May', 39, 24 ],
            ['Jun', 43, 23 ],
            ['Jul', 33, 23 ],
            ['Aug', 23, 13 ],
            ['Sep', 23, 16 ],
            ['Oct', 33, 20 ],
            ['Nov', 39, 26 ],
            ['Dec', 22, 15 ]
          ]
        },
        grid: {
          left: 100,
          right: '5%',
          height: '80%',
          bottom: 50
        },
        series: [
          // {
          //   type: 'pie',
          //   center: ['65%, 60'],
          //   radius: 35,
          //   encode: { itemName: 3, value: 4 }
          // },
          {
            type: 'line',
            encode: {
              x: 0,
              y: 1
            }
          }
          // {
          //   type: 'bar',
          //   encode: { x: 0, y: 2 }
          // }
        ]
      }
      // 绘制图表
      myChart.setOption(option);
    }
  }
}
</script>
<style lang="scss" scoped>
#basicChart {
  width: 1000px;
  height: 600px;
  border: 1px solid;
}
</style>