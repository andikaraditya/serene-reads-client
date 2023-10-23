<template>
    <div>
        <div class="register-card">
            <h1 class="text-center">Register</h1>
            <p class="text-center fs-4">Create a new account</p>
            <p class="text-center fs-5">Click 
                <a 
                @click.prevent="$router.push('/login')"
                class="pointer-hover">here</a> to login with existing account</p>
            <form 
            @submit.prevent="handleRegister(form)"
            action="">
                <label class="fs-3" for="username">Username:</label>
                <input 
                v-model="form.username"
                class="form-control" type="text" name="username" id="username" required>
                <label class="fs-3" for="email">Email:</label>
                <input 
                v-model="form.email"
                class="form-control" type="text" name="email" id="email" required>
                <label class="fs-3 mt-4" for="password">Password:</label>
                <input 
                v-model="form.password"
                class="form-control" type="password" name="password" id="password" required>
                <button class="btn btn-outline-dark mt-5 w-100">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import {authStore} from "../stores/authStore";
    export default {
        name: "RegisterPage",
        data(){
            return {
                form: {
                    username: "",
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            ...mapActions(authStore, ["handleRegister"])
        }
    }
</script>

<style scoped>
.register-card{
    width: 500px;
    margin: auto;
}
a{
    font-weight: bold;
    color: inherit;
}
</style>