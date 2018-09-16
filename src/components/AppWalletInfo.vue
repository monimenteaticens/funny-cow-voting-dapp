<template>
    <div class="c-wallet-info">
        App needs Web3 provider. Please install <a class="c-wallet-info__link" href="https://metamask.io/">Metamask</a> to use the app.
    </div>
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

.c-wallet-info {
    padding-top: $sp4;
    padding-bottom: $sp4;
    text-align: center;
}

.c-wallet-info__link {
    text-decoration: underline;
}
</style>
