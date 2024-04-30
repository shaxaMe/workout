<template>
    <div>
        <Transition>
            <Loading v-if="loading" />
            <div class="container" v-else>
                <AppNavbar />
                <Nuxt />
            </div>
        </Transition>
    </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';

export default {
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        if (process.client) {
            this.loading = false;
        }
    }
}
</script>

<style lang="scss">
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>