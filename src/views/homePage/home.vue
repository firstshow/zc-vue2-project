<template>
    <x-content v-scroll-record topShow title="首页" style="padding-bottom:50px">
        我是首页
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- 幻灯内容 -->
          <swiper-slide v-for="(item,index) in list" :key="item.id">
            <div class="x-home-redbag-box">
              <div class="x-home-redbag" flex="main:left cross:center">
                <img src="./../../assets/images/demo/demo_logo.png" alt="" height="60%">
                <div class="x-title">
                  <h3>大世面面馆{{item.name}}</h3>
                  <p class="margin-top-5">给你发了一个红包</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <p v-for="item in 50">{{userInfo.username}}</p>
        <x-button @on-click="alertShow = true">切换</x-button>
        <x-button @on-click="goNext()">跳转到下一个页面</x-button>

        <x-alert :show="alertShow" title="我是测试" @on-cancel="alertShow = false"></x-alert>
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
                list:[
                    {
                      id:1,
                      name:'111'
                    },
                    {
                        id:2,
                        name:'222'
                    }
                ]
            }
        },
        computed : {
            ...mapGetters([
                'userInfo'
            ]),
        },
        created(){
            this.getHomeDate();
        },
        methods : {
            ...mapActions([
                'uploadUserInfo'
            ]),
            goNext(){
                this.$router.push({name : 'test1'});
            },
            getHomeDate(){
                this.uploadUserInfo({
                    page : 1,
                    pageSize : 3 ,
                    recommend : 1
                }).then(res=>{
                    console.log(res);
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/home.less";
</style>
