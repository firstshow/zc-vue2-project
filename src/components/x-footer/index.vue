<template>
    <footer class="x-footer">
        <ul flex="cross:center">
            <router-link class="x-item" to="/home" tag="li">
                <i class="x-foot-icon home-icon"></i>
                <span>
                    首页
                </span>
            </router-link>
            <router-link class="x-item" to="/vip" tag="li">
                <i class="x-foot-icon vip-icon"></i>
                <span>
                    会员卡
                </span>
            </router-link>
            <router-link class="x-item" to="/my" tag="li">
                <i class="x-foot-icon my-icon"></i>
                <span>
                    我
                </span>
            </router-link>
        </ul>
    </footer>
</template>
<script>
    import util from 'util'

    export default {
        data() {
            return {

            }
        },
        created() {

        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
