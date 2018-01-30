<template>
    <x-content v-scroll-record topShow title="首页" style="padding-bottom:50px">
        我是首页{{ date | transitionDate('HH:MM:SS') }}

        <canvas id="myCanvas">
            啊哦，你的浏览器不支持canvas. Sorry~
        </canvas>

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
        <p v-for="item in 50" @touchstart="audioAutoPlay('audio')">{{userInfo.username}}</p>
        <x-button >切换</x-button>
        <x-button @on-click="goNext(1)">跳转到下一个页面</x-button>
        <x-button @on-click="goNext(2)">跳转到下一个页面</x-button>
        <a href="sms://10086?body='1111'">移动WEB页面JS一键发送短信咨询功能</a>
        <x-alert :show="alertShow" title="我是测试" @on-cancel="alertShow = false"></x-alert>

        <audio src="./../../../static/voice_fubei_get_money_success.mp3" id="audio">
            您的浏览器不支持 audio 标签。
        </audio>

    </x-content>
</template>

<script>
    import swiper from './../../mixins/swiper' // 引入混合的swiper
    import { mapGetters , mapActions } from 'vuex'
    export default {
        mixins: [swiper],
        data () {
            return {
                date:'1494924702',
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
                ],
                ctx:null, // 画布2d对象
                deviceWidth:360,  // 设备宽度
                canvasHeight:200, // 画布高度
                bgColor:'', // 背景渐变色
                //Sin 曲线属性
                xOffset:0, //波浪里面一层波浪的x偏移量
                xOffset1:0, //外面一层波浪x偏移量
                axisLength:360, //轴长
                waveWidth:0.015, //波浪宽度,数越小越宽
                waveHeight:10, //波浪高度,数越大越高
                speed:0.03, //波浪速度，数越大速度越快
                speed1:0.05, //波浪速度，数越大速度越快
                nowRange:5 //用于做一个临时的range
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
        mounted(){
            this.initCanvas();
//            this.audioAutoPlay('audio');//xxx是你audio标签的id
        },
        methods : {
            ...mapActions([
                'uploadUserInfo',
                'uploadLoginState'
            ]),
            /**
             * 初始化canvass
             * */
            initCanvas() {
                let myCanvas = document.getElementById('myCanvas');

                this.ctx = myCanvas.getContext('2d');
                this.deviceWidth = document.body.clientWidth;
                this.bgColor = this.ctx.createLinearGradient(0, 0, this.deviceWidth, this.canvasHeight);
                this.axisLength = this.deviceWidth; //轴长
                myCanvas.width = this.deviceWidth * 2;
                myCanvas.style.width = this.deviceWidth + 'px';
                myCanvas.height = this.canvasHeight * 2;
                myCanvas.style.height = this.canvasHeight + 'px';
                // 设置上一层波浪的渐变色
                this.bgColor.addColorStop(0, "#93afff");
                this.bgColor.addColorStop(1, "#073ed1");

                this.ctx.scale(2, 2); // 画布宽高扩大一倍，解决图像模糊
                this.render();
            },
            /**
             * 画sin 曲线函数
             * @param xOffset 波浪里面一层波浪的x偏移量
             * @param xOffset 外面一层波浪x偏移量
             * */
            drawSin(xOffset, xOffset1) {
                this.ctx.save();
                var points = []; //用于存放绘制Sin曲线的点
                // 绘制里面层波浪
                this.ctx.beginPath();
                //在整个轴长上取点
                for (var x = 0; x < 0 + this.axisLength; x += 20 / this.axisLength) {
                    //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                    var y = -Math.sin((0 + x) * this.waveWidth + xOffset);

                    var dY = this.canvasHeight * (1 - this.nowRange / (this.canvasHeight / 2) );

                    points.push([x, dY + y * this.waveHeight]);
                    this.ctx.lineTo(x, dY + y * this.waveHeight);
                }

                //封闭路径
                this.ctx.lineTo(this.axisLength, 0);
                this.ctx.lineTo(0, 0);
                this.ctx.lineTo(points[0][0], points[0][1]);
                this.ctx.fillStyle = '#8fb3ff';
                this.ctx.fill();
                this.ctx.restore();

                // 绘制最外层波浪
                this.ctx.beginPath();
                //在整个轴长上取点
                for (var x = 0; x < 0 + this.axisLength; x += 20 / this.axisLength) {
                    //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                    var y = -Math.sin((0 + x) * this.waveWidth + xOffset1);

                    var dY = this.canvasHeight * (1 - this.nowRange / (this.canvasHeight / 2 ));

                    points.push([x, dY + y * this.waveHeight]);
                    this.ctx.lineTo(x, dY + y * this.waveHeight);
                }

                //封闭路径
                this.ctx.lineTo(this.axisLength, 0);
                this.ctx.lineTo(0, 0);
                this.ctx.lineTo(points[0][0], points[0][1]);
                this.ctx.fillStyle = this.bgColor;
                this.ctx.globalAlpha = 0.68;
                this.ctx.fill();

                this.ctx.restore();
            },
            /**
             * 开始循环计算
             * 每一次渲染先清除画布
             * */
            render() {
                this.ctx.clearRect(0, 0, this.deviceWidth, this.canvasHeight);
                this.xOffset += this.speed;
                this.xOffset1 += this.speed1;

                this.drawSin(this.xOffset, this.xOffset1);
                requestAnimationFrame(this.render);
            },
            goNext(index) {
                if(index === 1){
                    this.$router.push({name: 'test1'});
                } else {
                    this.$router.push({name: 'test2'});
                }
            },
            showLogin() {
                this.uploadLoginState(true);
            },
            getHomeDate() {
                this.uploadUserInfo({
                    page: 1,
                    pageSize: 3,
                    recommend: 1
                }).then(res => {
                    console.log(res);
                });
            },
            audioAutoPlay(id) {
                console.log(id);
                var audio = document.getElementById(id);
                audio.play();
                document.addEventListener("WeixinJSBridgeReady", function () {
                    audio.play();
                }, false);
                document.addEventListener('AlipayJSBridgeReady', function () {
                    audio.play();
                }, false);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/home.less";
</style>
