<template>
    <div>
        <div class="login-card">
            <h1 class="text-center">Login</h1>
            <p class="text-center fs-4">Login with an existing account</p>
            <p class="text-center fs-5">If you don't have an account, click 
                <a 
                @click.prevent="$router.push('/register')"
                class="pointer-hover">here</a> to create new account</p>
            <form action="">
                <label class="fs-3" for="email">Email:</label>
                <input 
                v-model="form.email"
                class="form-control" type="text" name="email" id="email">
                <label class="fs-3 mt-4" for="password">Password:</label>
                <input 
                v-model="form.password"
                class="form-control" type="password" name="password" id="password">
                <button class="btn btn-outline-dark mt-5 w-100">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        data(){
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
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