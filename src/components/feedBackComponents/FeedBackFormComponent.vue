<template>
    <v-container>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
                <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required|max:20"
                >
                    <v-text-field
                        v-model="name"
                        :counter="20"
                        :error-messages="errors"
                        label="Ваше имя"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumber"
                    :rules="{
                        required: true,
                        regex:
                            '(\\+)?(\\(\\d{2,3}\\) ?\\d|\\d)(([ \\-]?\\d)|( ?\\(\\d{2,3}\\) ?)){5,12}\\d$',
                    }"
                >
                    <v-text-field
                        v-model="phoneNumber"
                        :error-messages="errors"
                        label="Ваш номер телефона"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                >
                    <v-text-field
                        v-model="email"
                        :error-messages="errors"
                        label="Ваш E-mail"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="message"
                    rules="required"
                >
                    <v-textarea
                        autocomplete="message"
                        v-model="message"
                        :counter="500"
                        :error-messages="errors"
                        label="Ваше сообщение"
                        required
                    ></v-textarea>
                </validation-provider>

                <v-btn class="mr-4" type="submit" :disabled="invalid">
                    Отправить
                </v-btn>
                <v-hover open-delay="100" close-delay="100" v-slot="{ hover }">
                    <v-btn :class="{ 'on-hover': hover }" @click="clear">
                        Очистить форму
                    </v-btn>
                </v-hover>
            </form>
        </validation-observer>
    </v-container>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
    }),

    methods: {
        submit() {
            this.$refs.observer.validate();
        },
        clear() {
            this.name = '';
            this.phoneNumber = '';
            this.email = '';
            this.message = '';
            this.$refs.observer.reset();
        },
    },
};
</script>

<style scoped>
.v-btn.on-hover {
    background: #ef9a9a;
    color: white;
}
</style>
