<template>
    <div class="x-progress-bar" :class="progressClass" :style="{ width : barWidth + 'px' }">
        <span class="x-cursor" :style="{width : width+'%'}" :class="cursorClass">{{width}}%</span>
    </div>
</template>

<script>
    export default {
        props: {
            progressClass : '', // 外壳样式，可以自定义
            cursorClass : '', // 游标样式，可以自定义
            barWidth: { //进度条总长度
                type: Number,
                default: 100,
            },
            total: { //总数
                type: Number,
                default: 10,
            },
            value: { // 当前数量
                type: Number,
                default: 2,
            }
        },
        computed : {
            /**
             * 当前数量所占总数的百分比
             * */
            width (){
                return Math.round((this.value/this.total) * 100);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "index.less";
</style>
