<template>
    <div class="about l-page-wrapper l-container">
        <app-lead
            :title="aboutTitle"
            :lead="aboutLead"
        />
        <div class="c-text">
            <a href="https://github.com/monimenteaticens/funny-cow-voting-dapp" target="_blank" rel="nofollow">GitHub repository Vue application</a><br>
            <a href="https://github.com/monimenteaticens/funny-cow-voting-contract" target="_blank" rel="nofollow">GitHub repository Smart Contract</a>
        </div>
    </div>
</template>

<script>
import AppLead from '@/components/AppLead.vue';

export default {
    name: 'ViewAbout',
    components: {
        AppLead,
    },
    computed: {
        aboutTitle() {
            return 'About this app';
        },
        aboutLead() {
            return 'Simple app for demonstration purpose.';
        },
    },
};
</script>

<style scoped type="text/scss" lang="scss">
@import '../scss/variables-import';

.c-text {
    text-align: center;
    a {
        color: $color-theme2-1;

        &:focus,
        &:hover {
            color: darken($color-theme2-1, 10);
        }
    }
}
</style>
