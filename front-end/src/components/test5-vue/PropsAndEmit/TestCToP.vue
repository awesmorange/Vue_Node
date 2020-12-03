<template>
    <div class="testCom">
        <!--
            子组件是一个buttton按钮，并为其添加了一个click事件，
            当点击的时候，使用$emit()触发事件，把childValue传给父组件
         -->
        <div class="my-2">
            <v-btn color="primary" @click="click">点我，查看子组件传来的值</v-btn>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TestComponent',
        data() {
            return {
                // 默认
                childValue: '我是来自子组件的消息'
            }
        },
        methods: {
            click() {
                this.$emit('childFn', this.childValue);
            }
        }
    }
</script>