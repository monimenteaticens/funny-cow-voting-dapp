<template>
<footer class="c-footer l-app-footer">
    <div class="l-container">
        © 2018 Benjamin Unternährer
    </div>
</footer>
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss">
@import '../scss/variables-import';

.c-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $color-theme2-1;
    color: $color-theme-white;
    min-height: 50px;
}
</style>
