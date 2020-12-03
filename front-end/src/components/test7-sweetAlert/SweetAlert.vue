<template>
    <div id="page">
        <v-btn @click="sweetAlert">
            <v-icon>send</v-icon>
        </v-btn>
    </div>
</template>
<script>
    export default {
        name:'SweetAlert',
        data(){
            return{

            }
        },
        methods:{
            sweetAlert(){
                this.$swal({
                    title: '错误！',
                    text: '是否继续',
                    type: 'error',
                    confirmButtonText: '酷'
                })
            }
        }
    }
</script>