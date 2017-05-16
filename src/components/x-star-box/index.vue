<template>
    <div class="x-star-box" v-tap="{ methods : clickMe }">
        <i class="x-star-icon "
           v-for="i in 5"
           :class="{'x-yellow-star-icon': parseFloat(num).toFixed(2) >= parseFloat(i).toFixed(2),
                    'x-half-star-icon': parseFloat(num).toFixed(2) > parseFloat(i-1).toFixed(2) && parseFloat(num).toFixed(2) < parseFloat(i).toFixed(2),
                    'x-gray-star-icon': parseFloat(num).toFixed(2) <= parseFloat(i-1).toFixed(2) && parseFloat(num).toFixed(2) < parseFloat(i).toFixed(2),
            }" ></i>
        <span class="ver-align-m color-yellow" v-if="showText">{{ parseFloat(num).toFixed(1) }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            num : { // 有几颗星
                type: Number,
                default: 0
            },
            showText : { // 是否显示文字
                type: Boolean,
                default: true
            },
        },
        methods: {
            clickMe() {
                this.$emit('on-click');
            }
        },

    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
