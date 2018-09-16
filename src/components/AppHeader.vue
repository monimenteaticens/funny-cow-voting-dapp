<template>
<header class="c-header l-app-header">
    <div class="l-container">
        <div class="c-header__inner">
            <div class="c-header__icon-w">
                <img class="c-header__icon" src="../assets/cowVote.svg" alt="Funny Cow Voting">
            </div>
            <div class="c-header__text-w">
                <h1 class="c-header__headline">Funny Cows</h1>
                <p class="c-header__address">Your address: {{ $store.state.address ? $store.state.address : 'loading' }}</p>
            </div>
        </div>
        <nav class="c-nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</header>
</template>

<script>
export default {
    name: 'AppHeader',
    mounted() {
        this.$store.dispatch('getAddress');
    },
};
</script>

<style scoped type="text/scss" lang="scss">
@import '../scss/variables-import';

.c-header {
    position: relative;
    background: linear-gradient(25deg, $color-theme2-1, lighten($color-theme2-1, 10)) ;
}

.c-header__inner {
    display: flex;
    flex-direction: row;
    padding: $sp6;
    align-items: center;
}

.c-header__icon-w {
    width: 85px;
    height: 85px;
    background: $color-white;
    text-align: center;
    padding: 10px;
    border-radius: 50%;
}

.c-header__icon {
    height: 160%;
    max-width: initial;
    margin-top: -40%;
    margin-left: -20%;
}

.c-header__text-w {
    padding-left: $sp6;
    color: $color-white;
}

.c-header__headline {
    @include font(primary, bold, normal, fs-200);
    text-transform: uppercase;
    margin-bottom: -#{$sp4};
}

.c-header__address {
    white-space: nowrap;

    @include size(sm-down) {
        max-width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.c-nav {
    @include font(primary, light, normal, fs-80);
    position: absolute;
    right: $sp5;
    top: $sp5;
    color: $color-white;

    .router-link-exact-active {
        @include font(primary, bold, normal, fs-80);
    }
}

</style>
