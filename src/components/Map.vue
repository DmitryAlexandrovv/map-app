<template>
    <div id="map" class="map" />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { LAYERS_TYPES } from '../const/layers';
import { MAP_STYLES_URL } from '../const/map';

const { mapState: mapLayersState } = createNamespacedHelpers('layers');
const { mapActions: mapMapLibreActions, mapState: mapMapLibreState } = createNamespacedHelpers('map');


export default {
    name: 'Map',
    data() {
        return {
            markers: {
                [LAYERS_TYPES.PINBALL]: [],
                [LAYERS_TYPES.SENSORS]: [],
            },
        };
    },
    computed: {
        ...mapLayersState([
            'pinballLocations',
            'sensorsBoxes',
            'loadedLayerTypes',
        ]),
        ...mapMapLibreState([
            'map',
        ]),
    },
    watch: {
        pinballLocations(value) {
            this.handleSelectLayer(value, LAYERS_TYPES.PINBALL);
        },
        sensorsBoxes(value) {
            this.handleSelectLayer(value, LAYERS_TYPES.SENSORS);
        },
    },
    mounted() {
        this.setMap(new window.maplibregl.Map({
            container: 'map',
            style: MAP_STYLES_URL,
            center: [0, 0],
            zoom: 1,
        }));

        this.handleSelectLayer(this.pinballLocations, LAYERS_TYPES.PINBALL);
        this.handleSelectLayer(this.sensorsBoxes, LAYERS_TYPES.SENSORS);

        window.addEventListener('click', this.mapMarkerClickHandler);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.mapMarkerClickHandler);
    },
    methods: {
        ...mapMapLibreActions([
            'setMap',
        ]),
        handleSelectLayer(value, type) {
            if (value.length === 0) {
                this.removeMarkers(this.markers[type]);
            }

            const markers = [];

            value.map((marker) => {
                const el = document.createElement('div');
                el.classList.add('map__marker', `map__marker--${marker.type}`);
                el.dataset.message = marker.properties.message;

                markers.push(new window.maplibregl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(this.map));
            });

            this.markers[type] = markers;
        },
        mapMarkerClickHandler(event) {
            const target = event.target;

            if (target.classList.contains('map__marker')) {
                window.alert(target.dataset.message);
            }
        },
        removeMarkers(markers) {
            markers.forEach((marker) => {
                marker.remove();
            });
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
