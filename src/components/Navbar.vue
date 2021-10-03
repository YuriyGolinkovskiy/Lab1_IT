<template>
    <v-container fluid>
        <v-app-bar color="indigo darken-1" dark padless>
            <v-img
                class=" md-2"
                :src="`${publicPath}img/logo.png`"
                max-height="55"
                max-width="55"
                contain
            ></v-img>
            <v-btn outlined class="ml-6 md-2 "
                ><router-link to="/">Главная</router-link></v-btn
            >
            <v-btn outlined class="ml-2 md-2"
                ><router-link to="/catalog">Каталог Товаров</router-link></v-btn
            >
            <v-btn outlined class="ml-2 md-2"
                ><router-link to="/feedBack">Обратная связь</router-link></v-btn
            >
            <v-spacer />
            <v-btn outlined class="md-6 "
                ><router-link to="/cart">
                    <v-row>
                        <v-col class="cont">
                            <v-row class="test">
                                Товаров в корзине:
                                <b>{{ $store.getters.getCartCount }}</b></v-row
                            >
                            <v-row class="test"
                                >Итого:<b>${{ totalPrice }}</b></v-row
                            >
                        </v-col>
                        <v-col>
                            <v-icon size="40px">
                                {{ iconCart }}
                            </v-icon>
                        </v-col>
                    </v-row>
                </router-link></v-btn
            >
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        iconCart: 'mdi-cart-outline',
        publicPath: process.env.BASE_URL,
    }),
    computed: {
        totalPrice() {
            let total = 0;

            for (let item of this.$store.state.cartModule.cart) {
                total += item.totalPrice;
            }

            return total.toFixed(2);
        },
    },
};
</script>

<style scoped>
.container {
    padding: 0;
}
.row + .row {
    margin-top: 0;
}
.cont {
    position: relative;
    font-size: 0.7em;
}
.test {
    padding-top: 1.2em;

    margin: -0.6em;
}
.test > b {
    width: 0;
}
.v-btn {
    border: none;
}
.v-application a {
    color: #eeeeee;
    text-decoration: none;
}
</style>
