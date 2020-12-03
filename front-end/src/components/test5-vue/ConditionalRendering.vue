<template>
    <div>
        <h1>列表渲染v-for + vuex模块化 --mapGetters </h1>
        <ul>
            <li v-for="(pro,index) in productsDetails" :key="index">
                {{pro.name}} -- {{pro.price}}
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'CR',
        data() {
            return {
                productsDetails: []
            }
        },
        computed: {
            ...mapGetters(['getproducts'])
        },
        created() {
            console.log((this.getproducts))
            this.productsDetails = this.getproducts
        }
    }
</script>