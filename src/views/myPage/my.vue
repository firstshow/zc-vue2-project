<template>
    <x-content v-scroll-record topShow title="首页" style="bottom:50px">
        我是vip
        <x-button @on-click="alertShow = true">切换</x-button>
        <x-button>跳转到下一个页面</x-button>
        <p v-for="item in 40">11111</p>
    </x-content>
</template>

<script>
    export default {
        data () {
            return {
                aa : '111'
            }
        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    @import "./../../assets/css/modules/my.less";
</style>
