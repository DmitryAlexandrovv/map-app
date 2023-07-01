<template>
    <div class="container">
        <Map />
        <LayersSwitcher />
    </div>
</template>

<script>
import Map from './components/Map';
import LayersSwitcher from './components/LayersSwitcher';

export default {
    name: 'App',
    components: {
        Map,
        LayersSwitcher,
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
