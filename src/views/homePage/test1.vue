<template>
    <x-content v-scroll-record color="#f00" title="111">
        <ul class="x-scroll" v-load-more="loadMore" :load-disabled="loadDisabled" style="overflow:auto;-webkit-overflow-scrolling: touch;">
            <li v-for="item in list"> {{item}} </li>
            <li>加载中...</li>
        </ul>
    </x-content>
</template>

<script>
    import swiper from './../../mixins/swiper' // 引入混合的swiper
    import { mapGetters , mapActions } from 'vuex'
    export default {
        mixins: [swiper],
        data () {
            return {
                alertShow : false,
                loadDisabled: true,
                list: 50
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
            loadMore(){
                this.loadDisabled = false;


                setTimeout(()=>{
                    this.list += 20;
                    this.loadDisabled = true;
                },800)
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/home.less";
    .x-scroll{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
