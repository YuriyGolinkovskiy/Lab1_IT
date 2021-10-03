<template>
    <v-container>
        <v-row>
            <product-component
                v-for="product in $store.getters.getProductsInCategory"
                :key="product.id"
                v-bind:product="product"
            />
        </v-row>
    </v-container>
</template>

<script>
import ProductComponent from '../components/productComponents/ProductComponent.vue';
export default {
    components: { ProductComponent },
};
</script>

<style></style>
