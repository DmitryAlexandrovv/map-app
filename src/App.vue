<template>
    <div class="container">
        <Loader v-if="isRequestInProgress" />
        <Map />
        <LayersSwitcher
            @request-started="isRequestInProgress = true"
            @request-completed="isRequestInProgress = false"
        />
        <CitiesSwitcher />
    </div>
</template>

<script>
import Map from './components/Map';
import LayersSwitcher from './components/LayersSwitcher';
import Loader from './components/Loader';
import CitiesSwitcher from './components/CitiesSwitcher';

export default {
    name: 'App',
    components: {
        Map,
        LayersSwitcher,
        Loader,
        CitiesSwitcher,
    },
    data() {
        return {
            isRequestInProgress: false,
            selectedCoordinates: [],
        };
    },
};
</script>

<style scoped>
    .container {
        position: relative;
    }

    .layers-switcher,
    .cities-switcher {
        position: fixed;
    }

    .layers-switcher {
        top: 20px;
        left: 20px;
    }

    .cities-switcher {
        bottom: 20px;
        left: 20px;
    }
</style>
