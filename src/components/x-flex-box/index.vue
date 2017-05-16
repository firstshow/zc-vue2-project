<template>
    <div flex="main:left cross:center" class="x-flex-box" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            wrap: { // 子元素是否一行显示  【wrap：换行；nowrap：不换行】
                type: String,
                default: 'wrap'
            },
        },
        computed: {
            styles () {
                return {
                    'flex-wrap': this.wrap,
                    '-webkit-flex-wrap': this.wrap,
                    '-moz-flex-wrap': this.wrap,
                    ' -o-flex-wrap': this.wrap,
                    '-webkit-box-lines': this.wrap === 'wrap' ? 'multiple' : 'single',
                    'box-lines': this.wrap === 'wrap' ? 'multiple' : 'single'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
