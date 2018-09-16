<template>
    <div class="l-container">
        <div class="c-list l-row">
            <div
                v-for="element in $store.state.cowImages"
                :key="element.id"
                class="l-col l-col--12 l-col--6@sm l-col--4@lg"
            >
                <CowElement
                    :imageTitle="element.description"
                    :imageLink="element.link"
                    :votes="element.votes"
                    :id="element.id"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CowElement from './CowElement.vue';

export default {
    name: 'CowList',
    components: {
        CowElement,
    },

    async mounted() {
        this.getTotalVotes();
        this.getCowImages();
    },

    methods: {
        getTotalVotes() {
            this.$store.dispatch('getTotalVotes');
        },

        getCowImages() {
            this.$store.dispatch('getCowImages');
        },
    },

};
</script>

<style scoped type="text/scss" lang="scss">
    @import '../scss/variables-import';

    .c-list {
        @include stack(sm);
    }
</style>
