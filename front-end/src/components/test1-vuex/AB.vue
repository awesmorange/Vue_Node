<template>
    <div id="page">
        <h1>vuex模块化 --store</h1>
<!--    方法一：使用props让兄弟组件通信-->
<!--        <product-list-one v-bind:products="products"></product-list-one>-->
<!--        <product-list-two v-bind:products="products"></product-list-two>-->
        <product-list-one></product-list-one>
        <product-list-two></product-list-two>
    </div>
</template>

<script>
    import ProductListOne from '@/components/test1-vuex/A'
    import ProductListTwo from '@/components/test1-vuex/B'

    export default {
        name: 'AB',
        components: {
            'product-list-one': ProductListOne,
            'product-list-two': ProductListTwo
        },
        data () {
            return {
                // // 方法一：使用props让兄弟组件通信
                //   products: [
                //     {name: '鼠标', price: 20},
                //     {name: '键盘', price: 40},
                //     {name: '耳机', price: 60},
                //     {name: '显示屏', price: 80}
                //   ]
            }
        }
    }
</script>

<style>
    body{
        font-family: Ubuntu;
        color: #555;
    }
</style>
