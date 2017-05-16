<template>
    <div class="x-cell-item" flex="main:justify cross:center" :class="{ 'x-right-arrow-icon' : hasArrow , 'x-cell-border' : hasBottomBorder , 'active' : hasActive }" v-tap="{ methods : clickMe }">
        <div class="x-title" :style="{color : titleColor}" v-if="title.length > 0">
            {{title}}
        </div>
        <div class="x-subtitle" :style="{ marginRight : hasArrow ? '10px' : '' ,color : subTitleColor }" v-if="subTitle.length > 0">
            {{subTitle}}
        </div>
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
            titleColor: { // 标题颜色
                type: String,
                default: ''
            },
            subTitle: { // 副标题
                type: String,
                default: ''
            },
            subTitleColor: { // 标题颜色
                type: String,
                default: ''
            },
            hasArrow: { // 是否有向右箭头
                type: Boolean,
                default: true
            },
            hasBottomBorder: { // 是否有下边框
                type: Boolean,
                default: true
            },
            hasActive: { // 点击了是否有点击效果
                type: Boolean,
                default: true
            }
        },
        methods: {
            clickMe() {
                this.$emit('on-click');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>