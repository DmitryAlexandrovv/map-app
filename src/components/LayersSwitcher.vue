<template>
    <div class="layers-switcher">
        <ul class="layers-switcher__list">
            <li
                v-for="layer in LAYERS"
                :key="layer.type"
                class="layers-switcher__item"
            >
                <font-awesome-icon
                    v-if="layer.type === activeLayerType"
                    class="layers-switcher__icon"
                    :icon="['fa', 'square-check']"
                />
                <a
                    class="layers-switcher__link"
                    href="#"
                    @click.prevent="onChangeLayer(layer.type)"
                >
                    {{ layer.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { LAYERS } from '../const/layers';

export default {
    name: 'LayersSwitcher',
    data() {
        return {
            LAYERS,
            activeLayerType: null,
        };
    },
    methods: {
        onChangeLayer(type) {
            this.activeLayerType = type;

            // ToDo dispatch action and send request
        },
    },
};
</script>

<style scoped>
    .layers-switcher__list {
        margin: 0;
        list-style-type: none;
        background: #fff;
        padding: 5px 15px 5px 25px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .layers-switcher__item {
        position: relative;
    }

    .layers-switcher__icon {
        position: absolute;
        left: -20px;
    }

    .layers-switcher__link {
        text-decoration: none;
        color: #000;
    }
</style>
