<template>
    <x-content v-scroll-record topShow title="首页" style="bottom:50px">
        我是我的
        <x-button @on-click="alertShow = true">切换</x-button>
        <x-button >跳转到下一个页面</x-button>
    </x-content>
</template>

<script>
    import { mapGetters , mapActions } from 'vuex'
    export default {
        data () {
            return {
                isFocusInput : false, // 搜索框是否获得焦点
                searchValue : '' // 输入的搜索内容
            }
        },
        computed : {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods : {
            ...mapActions([
                'uploadUserInfo'
            ]),

        },
    }
</script>
<style lang="less" scoped>
    @import "./../../assets/css/modules/vip.less";
</style>
