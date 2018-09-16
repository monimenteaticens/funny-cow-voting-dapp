<template>
    <div class="c-card">
        <div class="c-card__img-w">
            <img :src="imageLink" :alt="title" class="c-card__img">
        </div>
        <div class="c-card__text-w">
            <h2 class="c-card__title">{{ title }}</h2>
            <p class="c-card__votes">Votes received: {{ votes }}</p>
            <button @click="vote(id)" class="c-card__button">Vote</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CowElement',
    props: {
        imageLink: {
            required: true,
            type: String,
        },
        imageTitle: {
            required: false,
            type: null || String,
        },
        votes: {
            required: true,
            type: Number,
        },
        id: {
            required: true,
            type: String,
        },
    },
    computed: {
        title() {
            return this.imageTitle ? this.imageTitle : 'No Title';
        },
    },

    methods: {
        vote(_cowId) {
            this.$store.dispatch('vote', {
                cowId: _cowId,
            });
        },
    },
};
</script>

<style scoped type="text/scss" lang="scss">
    @import '../scss/variables-import';

    .c-card {
        position: relative;
        background-color: $color-theme-white;
        box-shadow: $box-shadow-default;
        border-radius: $border-radius-default;
        overflow: hidden;
        margin-bottom: $gutter-width;
    }

    .c-card__img-w {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        overflow: hidden;

        &::after {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: $color-theme-white;
            mix-blend-mode: color;
            content: '';
            opacity: 0.6;
            transition: opacity $trans-time-fast;
            border: 20px solid $color-theme2-1;

            .c-card:hover & {
                // opacity: 0.2;
            }
        }
    }

    .c-card__img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .c-card__text-w {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding-top: $sp6;
        padding-left: $sp6;
        padding-bottom: $sp7;
        padding-right: $sp6;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));
        color: $color-theme-white;
    }

    .c-card__title {
        @include font(primary, bold, normal, fs-140);
        text-transform: uppercase;
    }

    // .c-card__votes {}

    .c-card__button {
        position: absolute;
        right: $sp4;
        bottom: $sp8;
        border: 2px solid $color-theme-white;
        border-radius: 20px;
        color: $color-theme-white;
        padding-left: $sp5;
        padding-right: $sp5;
        padding-top: $sp3;
        padding-bottom: $sp3;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
        transform: translateY(0);
        transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.1s;
        will-change: transform, background-color, box-shadow;

        &:hover {
            transform: translateY($sp1);
            background: $color-theme2-1;
            box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
        }

        &:active {
            transform: translateY($sp2);
            box-shadow: 0px 0px 0px rgba(0,0,0,0.1);
        }
    }
</style>
