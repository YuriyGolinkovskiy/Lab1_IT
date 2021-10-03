<template>
    <v-col cols="4">
        <v-card
            class="text-center"
            elevation="4"
            @mousedown="openPhoto"
            @mouseup="$router.push(`/catalog/${catalog.title}`)"
        >
            <v-img max-height="180px" :src="catalog.url"> </v-img>

            <v-card-title class="justify-center">{{
                catalog.title
            }}</v-card-title>
        </v-card>
    </v-col>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        catalog: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        ...mapMutations([
            'setCurrentPhoto',
            'setCurrentProducts',
            'showDialog',
        ]),
        openPhoto() {
            // this.$emit('openPhoto', this.catalog);

            //this.setCurrentPhoto(this.catalog);
            //this.showDialog();
            this.setCurrentProducts(this.catalog.title);
        },
    },
};
</script>

<style scoped></style>
