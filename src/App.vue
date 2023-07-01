<template>
    <div class="container">
        <Loader v-if="isRequestInProgress" />
        <Map />
        <LayersSwitcher
            @request-started="isRequestInProgress = true"
            @request-completed="isRequestInProgress = false"
        />
    </div>
</template>

<script>
import Map from './components/Map';
import LayersSwitcher from './components/LayersSwitcher';
import Loader from './components/Loader';

export default {
    name: 'App',
    components: {
        Map,
        LayersSwitcher,
        Loader,
    },
    data() {
        return {
            isRequestInProgress: false,
        };
    },
};
</script>

<style scoped>
    .container {
        position: relative;
    }

    .layers-switcher {
        position: fixed;
        top: 20px;
        left: 20px;
    }
</style>
