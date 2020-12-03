<template>
    <div>
        <!--        打印来自父组件的信息      -->
        <h3>{{parentData}}</h3>
    </div>
</template>
<script>
    export default {
        name:'TestComponent',
        // 子组件的名称必须与父组件的前面名字相同
        // 如父组件中标签内容为：<my-component :parentData="parentValue"></my-component>
        // props里面的变量名为parentData
        props: ['parentData']
    }
</script>