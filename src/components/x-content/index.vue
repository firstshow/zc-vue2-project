<template>
    <div class="x-page-content" :class="{'x-main-page':topShow}" :style="{backgroundColor:color}">
        <slot></slot>
    </div>
</template>

<script>
    import * as util from '../../utils/util'
    export default {
        props: {
           title : { // 网页标题
                type: String,
                default: ''
            },
            color : { // 背景颜色
                type: String,
                default: '#f0f0f0'
            },
            topShow: { // 是否显示在最上层
                type: Boolean,
                default: false
            }
        },
        created(){
            util.setTitle(this.title);
        }
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
