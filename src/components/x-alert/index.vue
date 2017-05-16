<template>
    <div class="x-alert-outer-box" flex="main:center cross:center" v-if="show">
        <div class="x-alert-inner-box scale-show" :style="{width : alertWidth + '%'}">
            <i class="x-icon x-close-icon" @click="closeAlert()" v-if="isClose"></i>
            <div class="x-content" v-if="title">
                {{title}}
            </div>
            <slot></slot>
            <div class="x-alert-btn-box" flex="{main:center cross:center}">
                <a class="x-btn-item" :class="cancelBtnClass" href="javascript:void(0)" @click="clickCancel">{{cancelText}}</a>
                <a class="x-btn-item" :class="confirmBtnClass" href="javascript:void(0)" @click="clickConfirm">{{confirmText}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show : { // 是否显示
                type: Boolean,
                default: false,
            },
            alertWidth : { // 提示框宽度
                type: Number,
                default: 50,
            }, // 弹出框宽度 百分数来计算
            confirmBtnClass : '', // 自定义右边按钮的样式
            cancelBtnClass : '', // 自定义左边按钮的样式
            confirmText : { // 右边按钮的文字
                type: String,
                default: '确认',
            },
            cancelText : { // 左边按钮的文字
                type: String,
                default: '取消',
            },
            title : { // 正文提示文字
                type: String,
                default: '',
            },
            isClose : false
        },
        methods:{
            /**
             * 关闭弹出框
             * */
            closeAlert(){
                this.$emit('close-alert');
            },
            /**
             * 点击左边的按钮
             * 调父元素的方法
             * */
            clickCancel(){
                this.$emit('on-cancel');
            },
            /**
             * 点击右边的按钮
             * 调父元素的方法
             * */
            clickConfirm(){
                this.$emit('on-confirm');
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "index.less";
</style>
