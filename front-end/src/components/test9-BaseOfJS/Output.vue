<template>
    <div id="page">
        <h1>Console</h1>
        <v-divider></v-divider>
        <v-btn @click="log">
            <v-icon>console.log</v-icon>
        </v-btn>

        <v-btn @click="dir">
            <v-icon>console.dir</v-icon>
        </v-btn>

        <v-btn @click="warn">
            <v-icon>console.warn</v-icon>
        </v-btn>

        <v-btn @click="table">
            <v-icon>console.table</v-icon>
        </v-btn>

        <v-btn @click="time">
            <v-icon>console.time</v-icon>
        </v-btn>

        <v-btn @click="tmEnd">
            <v-icon>console.timeEnd</v-icon>
        </v-btn>

        <h1>Window提示框</h1>
        <v-divider></v-divider>
        <v-btn @click="wAlert">
            <v-icon>alert</v-icon>
        </v-btn>

        <v-btn @click="wConfirm">
            <v-icon>confirm</v-icon>
        </v-btn>

        <v-btn @click="wPrompt">
            <v-icon>prompt</v-icon>
        </v-btn>

        <h1>页面插入</h1>
        <v-divider></v-divider>
        <v-btn @click="dWrite">
            <v-icon>document.write</v-icon>
        </v-btn>

        <v-btn @click="inHtml">
            <v-icon>innerHTML</v-icon>
        </v-btn>

        <v-btn @click="inText">
            <v-icon>innnerText</v-icon>
        </v-btn>

        <v-btn @click="dValue">
            <v-icon>value</v-icon>
        </v-btn>
    </div>
</template>
<script>
    export default {
        name:'Output',
        data(){
            return{
                d:'',
            }
        },
        methods:{
            log(){
                console.log('你触发了console.log按钮')
            },
            dir(){
                console.dir(this.d)
            },
            warn(){},
            table(){},
            time(){},
            tmEnd(){},
            wAlert(){
                alert('我是平平无奇的alert，只能给你带来简单的快乐。')
            },
            wConfirm(){
                confirm('我是 Confirm，我们一起成长吧！')
            },
            wPrompt(){
                prompt('我是 Prompt，你可以赔我唠会儿嘛？')
            },
            dWrite(){},
            inHtml(){},
            inText(){},
            dValue(){}
        }
    }
</script>
<style>
    .v-btn{
        margin: 20px;
    }
</style>