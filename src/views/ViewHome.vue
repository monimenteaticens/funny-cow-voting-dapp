<template>
    <div class="home l-page-wrapper">
        <app-lead
            :title="homeTitle"
            :lead="lead"
        />
        <cow-list/>
    </div>
</template>

<script>
import AppLead from '@/components/AppLead.vue';
import CowList from '@/components/CowList.vue';

export default {
    name: 'ViewHome',
    components: {
        AppLead,
        CowList,
    },
    data() {
        return {
            homeTitle: 'Welcome',
        };
    },
    computed: {
        lead() {
            return `Vote now for your favorite Cow image on the Ethereum Blockchain. You can vote once per Account. So far we received ${this.$store.state.totalVotes} votes`;
        },
    },
};
</script>
