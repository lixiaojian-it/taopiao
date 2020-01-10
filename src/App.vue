<template>
    <div id="app">
        <router-view></router-view>

        <Footer v-if="footerBar" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "App",
    components: {
        Footer: () => import("@/components/Footer")
    },
    computed: {
        ...mapGetters({
        footerBar: "getFooterBarState"
        })
    }
};
</script>

<style>
@import "./assets/css/base.less";
@import "./assets/css/common.less";
#app {

}
</style>
