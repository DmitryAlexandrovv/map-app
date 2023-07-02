<template>
    <div class="cities-switcher">
        <ul class="cities-switcher__list">
            <li
                v-for="city in CITIES"
                :key="city.type"
                class="cities-switcher__item"
            >
                <button
                    class="cities-switcher__btn"
                    href="#"
                    @click.prevent="flyToCoordinates(city.coordinates)"
                >
                    to {{ city.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { CITIES } from '../const/citites';

const { mapActions } = createNamespacedHelpers('map');

export default {
    name: 'CititesSwitcher',
    data() {
        return {
            CITIES,
        };
    },
    methods: {
        ...mapActions([
            'flyToCoordinates',
        ]),
    },
};
</script>

<style scoped>
    .cities-switcher__list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        gap: 20px;
    }

    .cities-switcher__btn {
        background: #fff;
        padding: 5px 15px;
        border-radius: 4px;
        outline: 0;
        border: 0;
        cursor: pointer;
        transition: transform .2s linear;
    }

    .cities-switcher__btn:hover {
        transform: scale(1.1);
    }

    .cities-switcher__link {
        text-decoration: none;
        color: #000;
    }
</style>
