<template>
    <div class="x-simple-item" flex="main:left cross:center" :class="{ 'x-item-border' : hasBottomBorder }" v-tap.stop="{methods : clickMe }">
        <slot name="beforeContent"></slot>
        <div class="x-logo" flex-box="0" :style="{width: logoSize , height: logoSize}">
            <img src="./../../assets/images/demo/demo_logo.png" alt="logo">
        </div>
        <div class="x-content" flex="dir:top main:center cross:left">
            <h3 class="x-title">{{title}}</h3>
            <slot name="title"></slot>
            <span class="x-subtitle">{{subTitle}}</span>
            <slot name="subTitle"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            logo: { // 图标logo
                type: String,
                default: ''
            },
            logoSize :{ // 图标logo 的大小
                type: String,
                default: ''
            },
            title: { // 标题
                type: String,
                default: ''
            },
            subTitle: { // 副标题
                type: String,
                default: ''
            },
            hasBottomBorder: { // 是否有下边框
                type: Boolean,
                default: true
            },
        },
        methods: {
            clickMe() {
                this.$emit('on-click');
            }
        }
    }
</script>

<style lang="less">
    @import "./index.less";
</style>
