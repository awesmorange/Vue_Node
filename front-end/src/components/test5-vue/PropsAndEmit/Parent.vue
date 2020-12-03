<template>
    <div id="page">
        <!--
            在Vue中，父子组件的关系可以总结为prop向下传递，事件向上传递。
            父组件通过prop给子组件下发数据，子组件通过事件给父组件发送信息。
            props down , events up
        -->
        <br/>
        <h1>父组件 --> 子组件</h1>
        <br/>

        <!--        父组件传值给子组件       -->
        <my-component :parentData="parentValue"></my-component>

        <!--        分割线         -->
        <br/>
        <v-divider></v-divider>
        <br/>

        <h1>子组件 --> 父组件</h1>
        <!--        子组件传值给父组件       -->
        <!--
            每个Vue实例都实现了事件接口：
            子组件，使用$emit(eventName,optionalPayload)来触发事件；
            父组件，使用$on(eventName)监听子组件的事件。
            ？另外，父组件可以在子组件的自定义标签上使用v-on来监听子组件触发的自定义事件事件。
            -->

        <!--        使用语法糖       -->
        <child-component @childFn="parentFn"></child-component>
        <br/>
        <h3> {{childValue}}</h3>
    </div>
</template>
<script>
    import TestPToC from "@/components/test5-vue/PropsAndEmit/TestPToC"
    import TestCToP from "@/components/test5-vue/PropsAndEmit/TestCToP";
    export default {
        name: 'Reuse',
        data() {
            return {
                parentValue: "我是来自父组件的信息",
                childValue: ''
            }
        },
        components: {
            'my-component': TestPToC,
            'child-component': TestCToP
        },
        methods: {
            // 父组件在组件上定义了一个自定义事件childFn，
            // 事件名为parentFn用于接受子组件传过来的childValue值。
            parentFn(payload) {
                this.childValue = payload;
            }
        }
    }
</script>