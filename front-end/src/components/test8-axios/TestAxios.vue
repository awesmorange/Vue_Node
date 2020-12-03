<template>
    <div id="page">
        <v-btn @click="onLoad()">
            <v-icon>onLoad</v-icon>
        </v-btn>

        <div v-if="!network">
            <h3>我没网了</h3>
            <v-btn @click="onRefresh">刷新</v-btn>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'TestAxios',
        created () {
            // this.onLoad();
            // this.$swal()
        },
        computed: {
            ...mapState(['network'])
        },
        methods: {
            onLoad() {
                this.$api.article.articleList().then(res=> {
                    // 执行某些操作
                    console.log(res.data)
                })
            },
            // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
            onRefresh () {
                this.$router.replace('/')
            }
        }

    }
</script>