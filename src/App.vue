<template>
    <div id="app" class="c-app l-app-wrapper">
        <toast position="ne"></toast>
        <app-wallet-info v-if="!$store.state.isWalletInstalled" />
        <app-header></app-header>
        <main class="l-app-content">
            <div class="c-progress" v-if="$store.state.votingInProgress"></div>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
import { Toast } from 'vuex-toast';
import AppHeader from './components/AppHeader.vue';
import AppWalletInfo from './components/AppWalletInfo.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        AppWalletInfo,
        Toast,
    },
};
</script>

<style lang="scss">
@import 'scss/variables-import';

.c-app {
    background-color: $color-theme2-2;
    min-height: 100vh;
}

.c-progress {
    position: absolute;
    top: 0;
    width: 100%;
    height: 20px;
    text-align: center;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        content: '';
        $gradient-color: $color-theme2-1;
        $gradient-color2: lighten($gradient-color, 10);
        background: linear-gradient(
            15deg,
            $gradient-color 10%,
            $gradient-color2 45%,
            lighten($gradient-color2, 20%) 70%,
            $gradient-color 100%)
            repeat;
        background-size: 50% 100%;
        animation: moving-gradient 800ms ease-in-out infinite;
    }
}

@keyframes moving-gradient {
    0% {
        background-position: left bottom;
    }
    100% {
        background-position: right bottom;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
