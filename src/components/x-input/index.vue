<template>
    <div class="x-input-box" flex="{ cross:center box:first }" @click="clickMe" :class="{ 'x-cell-border' : hasBottomBorder}" >
        <span class="x-title" :style="{ 'margin-right':titleMarginRight , color : titleColor}">{{title}}</span>
        <input v-model="value" :placeholder="placeholder" type="text" v-if="type === 'text'">
        <input v-model="value" :placeholder="placeholder" type="password" v-else-if="type === 'password'">
        <input v-model="value" :placeholder="placeholder" type="tel" v-else-if="type === 'tel'">
        <input v-model="value" :placeholder="placeholder" type="number" v-else-if="type === 'number'">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value : ''
            }
        },
        props: {
            val: { // 值
                type: String,
                default: ''
            },
            title: { // 标题
                type: String,
                default: ''
            },
            titleMarginRight:{ // 文字右侧外边距
                type: String,
                default: '1rem'
            },
            titleColor:{
                type: String,
                default: '#5e5e5e'
            },
            type : { // 背景颜色
                type: String,
                default: 'text'
            },
            placeholder:{ // 输入框提示文字
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
        },
        watch:{
            /**
             * 监听value值的变化，再把改变的值传递到伏组件中
             * */
            'value'(val){
                this.$emit('on-change',val);
            }
        }
    }
</script>

<style lang="less">
    @import "./index.less";
</style>
