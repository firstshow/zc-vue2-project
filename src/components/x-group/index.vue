<template>
    <div class="x-group" v-tap.stop="{methods : clickMe }">
        <div class="x-title">{{title}}</div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            title: { // 商家名称
                type: String,
                default: '标题'
            },
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