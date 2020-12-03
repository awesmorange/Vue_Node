<template>
    <div id="page">
        <div id="lineChart" :style="{width: '500px', height: '400px'}"></div>
        <div id="pieChart-A" :style="{width: '600px', height: '600px'}"></div>
        <div id="pieChart-B" :style="{width: '700px', height: '700px',padding:'50px'}"></div>
        <div id="barChart" :style="{width: '1000px', height: '600px'}"></div>
    </div>
</template>
<script>
    export default {
        name: 'DrawChart',
        data() {
            return {
            }
        },
        mounted() {
            this.drawLine();
            this.drwaPieA();
            this.drawPieB();
            this.drawBar();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('lineChart'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '在Vue中使用echarts'},
                    color: ["orange"],
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'line',
                        smooth:true,
                        data: [5, 20, 36, 10, 10, 20],
                    }]
                });
            },

            drwaPieA() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('pieChart-A'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '饼图纹理',
                        textStyle: {
                            color: '#235894'
                        },
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 10,
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: { // 区域提示
                                show: false,
                                position: 'center'
                            },
                            emphasis: { // 动态提示效果
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: { // 提示线
                                show: false
                            },
                            data: [ // 数据
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                });
            },

            drawPieB(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('pieChart-B'))
                // 绘制图表
                myChart.setOption({
                    title: { // 标题
                        text: '访问比例',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: { // 提示信息
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: { // 图表说明
                        orient: 'vertical',
                        left: 10,
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源', // 提示信息标题
                            type: 'pie', // 图表类型
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: { // 延伸提示字体样式
                                fontSize: 18,
                                // color: '#235894'
                            },
                            labelLine: { // 延伸提示线样式
                                lineStyle: {
                                    // color: '#235894'
                                }
                            },
                            emphasis: { // 动态提示设计
                                label: {
                                    show: true,
                                    fontSize: '25',
                                    fontWeight: 'bold'
                                }
                            },
                            data: [ // 数据
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                });
            },

            drawBar(){

                var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
                var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
                var yMax = 500;
                var dataShadow = [];

                for (var i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('barChart'))

                myChart.setOption (
                    {
                        title: {
                            text: '特性示例：渐变色 阴影 点击缩放',
                            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
                            left:'center'
                        },
                        xAxis: {
                            data: dataAxis,
                            axisLabel: {
                                inside: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            z: 10
                        },
                        yAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        dataZoom: [
                            {
                                type: 'inside'
                            }
                        ],
                        series: [
                            { // For shadow
                                type: 'bar',
                                itemStyle: {
                                    color: 'rgba(0,0,0,0.05)'
                                },
                                barGap: '-100%',
                                barCategoryGap: '40%',
                                data: dataShadow,
                                animation: false
                            },
                            {
                                type: 'bar',
                                itemStyle: {
                                    color: this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: this.$echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#2378f7'},
                                                {offset: 0.7, color: '#2378f7'},
                                                {offset: 1, color: '#83bff6'}
                                            ]
                                        )
                                    }
                                },
                                data: data
                            }
                        ]
                    }
                );

                // Enable data zoom when user click bar.
                var zoomSize = 6;
                myChart.on('click', function (params) {
                    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                    myChart.dispatchAction({
                        type: 'dataZoom',
                        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                    });
                });
            }
        }
    }
</script>