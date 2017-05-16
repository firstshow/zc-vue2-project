<template>
    <div class="x-button" flex="{ main:center cross:center }" @click="clickMe" :style="{backgroundColor : bgColor , color : textColor , borderRadius : radius }">
        <h3>{{title}}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            title: { // 标题
                type: String,
                default: ''
            },
            bgColor : { // 背景颜色
                type: String,
                default: '#fb6165'
            },
            textColor : { // 文字颜色
                type: String,
                default: '#fff'
            },
            radius : { // 按钮边角弧度
                type: String,
                default: '6px'
            }
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
