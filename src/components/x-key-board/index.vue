<template>
    <div class="x-key-board">
        <!-- 底部遮罩层 -->
        <div class="x-mask" :style="{ display : show ? 'block' : 'none' }" @touchend="keyClickClose"></div>

        <!-- 自定义键盘 start -->
        <div class="x-key-board-box" :class="{ 'pop-up-show' : show }">
            <ul flex="main:left">
                <li class="x-column" flex="dir:top main:left">
                    <div class="x-item" @touchend.stop="keyClick('1')">
                        1
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('4')">
                        4
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('7')">
                        7
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('.')">
                        .
                    </div>
                </li>
                <li class="x-column">
                    <div class="x-item" @touchend.stop="keyClick('2')">
                        2
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('5')">
                        5
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('8')">
                        8
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('0')">
                        0
                    </div>
                </li>
                <li class="x-column">
                    <div class="x-item" @touchend.stop="keyClick('3')">
                        3
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('6')">
                        6
                    </div>
                    <div class="x-item" @touchend.stop="keyClick('9')">
                        9
                    </div>
                    <!-- 关闭键盘按钮 -->
                    <div class="x-item" @touchend.stop="keyClick('close')">
                        <i class="x-close-key-board-icon"></i>
                    </div>
                </li>
                <li class="x-column">
                    <!-- 删除按钮 -->
                    <div class="x-item x-del-btn" @touchend.stop="keyClick('×')">
                        <i class="x-del-key-board-icon"></i>
                    </div>
                    <!-- 确定按钮 -->
                    <div class="x-item x-ok-btn" @touchend.stop="keyClick('ok')">
                        确定
                    </div>
                </li>
            </ul>
        </div>
        <!-- 自定义键盘 end -->
    </div>
</template>

<script>
    export default {
        props: {
            show: { // 是否显示
                type: Boolean,
                default: false
            },
            value : { // 输入的值
                type: String,
                default: ''
            }
        },
        methods: {
            /**
             * 点击键盘
             * 输入金额最多8位
             * 小数点后最多2位
             * 金额必须大于0.01
             * @param  val  输入的内容
             * */
            keyClick(val) {
                let that = this;
                switch (val){
                    case '×' :
                        that.keyClickDel();
                        break;
                    case 'close' :
                        that.keyClickClose();
                        break;
                    case 'ok' :
                        that.keyClickOk();
                        break;
                    default:
                        that.keyClickNumber(val);
                        break;
                }
            },
            /**
             * 点击键盘
             * 点击了关闭键盘按钮
             * */
            keyClickClose(){
                this.$emit("close-key-board");
            },
            /**
             * 点击键盘
             * 点击了删除按钮
             * */
            keyClickDel(){
                let afterVal = this.value.substring(0,this.value.length-1);
                this.$emit("update-value" , afterVal);
            },
            /**
             * 点击键盘
             * 点击了确定按钮
             * */
            keyClickOk(){
                this.$emit("close-key-board");
            },
            /**
             * 点击键盘
             * 点击了数字，进行正常的输入操作
             * @param  val  输入的内容
             * */
            keyClickNumber(val){
                let that = this;
                if(that.value.length < 8 && that.checkValue(val)){
                    let afterVal = that.value + val;
                    console.log(afterVal);
                    this.$emit("update-value" , afterVal);
                }

            },
            /**
             * 检测输入金额是否合法
             * @param  val  输入的内容
             * */
            checkValue(val){
                let that = this ,checkMoney = that.value.split("");
                if(
                    (checkMoney.indexOf(".") > -1 && val == '.') // 判断是否输入了2个‘.’
                    ||
                    (checkMoney.length === 0 && val == '.') // 判断第一个是否是‘.’
                    ||
                    (checkMoney[0] == '0' && checkMoney.length === 1 && val != '.') // 判断开始是否连续输入了两个0
                    ||
                    ((that.value + val).split(".")[1] && (that.value + val).split(".")[1].length > 2) // 限制小数点后最多2位
                ){
                    return false
                }
                return true;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>