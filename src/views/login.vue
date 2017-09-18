<template>
    <transition name="scene-transition">
        <x-content v-scroll-record topShow title="首页" style="background-color: #f00" v-show="userInfo.loginShow">
            我是登录页面
            <button @click="close()">关闭</button>
        </x-content>
    </transition>
</template>

<script>
    import { mapGetters , mapActions } from 'vuex'
    export default {
        data () {
            return {
                isFocusInput : false, // 搜索框是否获得焦点
                searchValue : '', // 输入的搜索内容
                show:false
            }
        },
        computed : {
            ...mapGetters([
                'userInfo'
            ])
        },
        created(){
            setTimeout(()=>{
                this.show = true
            },1000)

            setTimeout(()=>{
                this.show = false
            },3000)
        },
        methods : {
            ...mapActions([
                'uploadUserInfo',
                'uploadLoginState'
            ]),
            close(){
                this.uploadLoginState(false);
            }

        },
    }
</script>
<style lang="less" scoped>
    .scene-transition-enter-active,
    .scene-transition-leave-active{
        backface-visibility: hidden;
        will-change: transform;
        transition: all 500ms;
        -webkit-transition: all 500ms;
        -moz-transition: all 500ms;
        perspective: 1000;
    }
    .scene-transition-enter {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        -webkit-transform: translate3d(0, 100%, 0);
        -moz-transform: translate3d(0, 100%, 0);
    }
    .scene-transition-leave-active {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        -webkit-transform: translate3d(0, 100%, 0);
        -moz-transform: translate3d(0, 100%, 0);
    }
</style>
