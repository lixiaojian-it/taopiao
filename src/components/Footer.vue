<template>
    <footer class="footer">
        <section>
            <nav class="nav">
                <router-link to="/" :class="{active: route === '/'}">
                    <i class="iconfont">&#xe71f;</i>
                    <span>首页</span>
                </router-link>
            </nav>
        </section>
        <section>
            <nav class="nav">
                <router-link to="/movie" :class="{active: route === '/movie'}">
                    <i class="iconfont">&#xe662;</i>
                    <span>电影</span>
                </router-link>
            </nav>
        </section>
        <section>
            <nav class="nav">
                <router-link to="/me" :class="{active: route === '/me'}">
                    <i class="iconfont">&#xe65e;</i>
                    <span>我的</span>
                </router-link>
            </nav>
        </section>
    </footer>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            route() {
                return this.$route
            }
        }
    }
</script>  
<style lang="less" scoped>
.footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 0.9rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    section {
        flex: 1;
    }
    .nav {
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #777;
            .iconfont {
                font-size: 0.5rem;
            }
            span {
                font-size: 0.26rem;
            }
        }
        .router-link-exact-active {
            color: #ff4d64;
        }
    }
}    
</style>