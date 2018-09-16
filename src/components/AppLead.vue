<template>
    <div class="c-intro l-container">
        <div class="l-row l-align-center">
            <div class="l-col l-col--12 l-col--8@lg">
                <h2 class="c-intro__title">{{ title }}</h2>
                <p class="c-intro__text">{{ lead }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppLead',
    props: {
        title: {
            required: true,
            type: String,
        },
        lead: {
            required: true,
            type: String,
        },
    },
};
</script>

<style scoped type="text/scss" lang="scss">
@import '../scss/variables-import';

.c-intro {
    @include font(primary, light, normal, fs-140);
    @include stack(sm);
    text-align: center;
}

.c-intro__title {
    @include font(primary, bold, normal, fs-160);
    margin-bottom: $sp3;
}

.c-list {
    @include stack(sm);
}
</style>
