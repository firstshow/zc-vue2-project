<template>
    <x-content v-scroll-record color="#f00" title="111">
        我是测试1页面
    </x-content>
</template>

<script>
    import swiper from './../../mixins/swiper' // 引入混合的swiper
    import { mapGetters , mapActions } from 'vuex'
    export default {
        mixins: [swiper],
        data () {
            return {
                alertShow : false
            }
        },
        computed : {
            ...mapGetters([
                'userInfo'
            ]),
        },
        methods : {
            ...mapActions([
                'uploadUserInfo'
            ]),
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/home.less";
</style>
