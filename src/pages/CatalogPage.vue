<template>
    <v-container>
        <v-row class="myRow">
            <catalog-component
                v-for="catalog in $store.getters.getAllCatalogs"
                :key="catalog.id"
                v-bind:catalog="catalog"
            />
        </v-row>
    </v-container>
</template>

<script>
//:photo="currentPhoto" v-model="dialogVisible"
//@openPhoto="openPhoto"
import CatalogComponent from '../components/catalogComponents/CatalogComponent.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        CatalogComponent,
    },
    data: () => ({
        //catalogs: [],
        // currentPhoto: {},
        // dialogVisible: false,
    }),
    created() {
        //this.setData();
        //this.setData();
    },

    mounted() {},
    methods: {
        ...mapActions(['setData']),

        // setData() {
        //     this.axios
        //         .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        //         .then((response) => (this.catalogs = response.data));
        // },
        // openPhoto(photo) {
        //     this.currentPhoto = photo;
        //     this.dialogVisible = true;
        // },
    },
};
</script>

<style scoped>
.myRow {
    margin: 0 auto;
}
</style>
