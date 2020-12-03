<template>
    <div id="home-title">{{title}}</div>
</template>

<script>
    export default {
        name:'home',
        data () {
            return {
                title:'this is home page , click navigation bar to jump !'
            }
        }
    }
</script>
<style>
    #home-title{
        float: left;
    }
</style>
