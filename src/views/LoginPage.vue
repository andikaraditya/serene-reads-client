<template>
    <div>
        <div class="login-card d-flex flex-column">
            <h1 class="text-center">Login</h1>
            <p class="text-center fs-4">Login with an existing account</p>
            <p class="text-center fs-5">If you don't have an account, click 
                <a 
                @click.prevent="$router.push('/register')"
                class="pointer-hover">here</a> to create new account</p>
            <form 
            @submit.prevent="handleLogin(form)"
            action="">
                <label class="fs-3" for="email">Email:</label>
                <input 
                v-model="form.email"
                class="form-control" type="text" name="email" id="email" required>
                <label class="fs-3 mt-4" for="password">Password:</label>
                <input 
                v-model="form.password"
                class="form-control" type="password" name="password" id="password" required>
                <button class="btn btn-outline-dark mt-5 w-100">Login</button>
            </form>
            <GoogleLogin class="m-auto mb-2 mt-3" :callback="googleLogin"/>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import {authStore} from "../stores/authStore";
    export default {
        name: "LoginPage",
        data(){
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            ...mapActions(authStore, ["handleLogin", "googleLogin"])
        }
    }
</script>

<style scoped>
.login-card{
    width: 500px;
    margin: auto;
}
a{
    font-weight: bold;
    color: inherit;
}
</style>