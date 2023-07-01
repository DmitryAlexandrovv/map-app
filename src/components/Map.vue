<template>
    <div id="map" class="map" />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { MAP_STYLES_URL } from '../const/map';

const { mapState } = createNamespacedHelpers('layers');


export default {
    name: 'Map',
    data() {
        return {
            map: null,
        };
    },
    computed: {
        ...mapState([
            'pinballLocations',
            'sensorsBoxes',
        ]),
    },
    watch: {
        pinballLocations(value) {
            this.handleSelectLayer(value);
        },
        sensorsBoxes(value) {
            this.handleSelectLayer(value);
        },
    },
    mounted() {
        this.map = new window.maplibregl.Map({
            container: 'map',
            style: MAP_STYLES_URL,
            center: [0, 0],
            zoom: 1,
        });

        window.addEventListener('click', this.mapMarkerClickHandler);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.mapMarkerClickHandler);
    },
    methods: {
        handleSelectLayer(value) {
            value.map((marker) => {
                const el = document.createElement('div');
                el.classList.add('map__marker', `map__marker--${marker.type}`);
                el.dataset.message = marker.properties.message;

                new window.maplibregl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(this.map);
            });
        },
        mapMarkerClickHandler(event) {
            const target = event.target;

            if (target.classList.contains('map__marker')) {
                window.alert(target.dataset.message);
            }
        },
    },
};
</script>

<style scoped>
    .map {
        height: 100vh;
        width: 100vw;
    }
</style>

<style>
    .map__marker {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .map__marker--pinball {
        background: green;
    }

    .map__marker--sensors {
        background: blueviolet;
    }
</style>
