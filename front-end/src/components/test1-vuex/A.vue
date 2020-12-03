<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <!-- 将商品信息遍历出来 -->
        <ul>
            <li v-for="product in products" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'A',
        // // 方法一：使用props让兄弟组件通信
        // props: ['products'],
        data () {
            return {
                //方法二：把App.vue中的两个组件共同使用的data抽离出来, 放到state中，让兄弟组件通信
                products : this.$store.getters.getproducts //获取store中state的数据
            }
        }
    }
</script>

<style scoped>
    #product-list-one{
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list-one ul{
        padding: 0;
    }
    #product-list-one li{
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
    .price{
        font-weight: bold;
        color: #E8800C;
    }
</style>