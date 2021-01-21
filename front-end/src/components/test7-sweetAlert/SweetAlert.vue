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
              this.$successAlert({})
            }
        }
    }
</script>