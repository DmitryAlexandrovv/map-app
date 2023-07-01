<template>
    <div id="map" class="map" />
</template>

<script>
import { MAP_STYLES_URL } from '../const/map';

export default {
    name: 'Map',
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        this.map = new window.maplibregl.Map({
            container: 'map',
            style: MAP_STYLES_URL,
            center: [0, 0],
            zoom: 1,
        });
    },
};
</script>

<style scoped>
    .map {
        height: 100vh;
    }
</style>
