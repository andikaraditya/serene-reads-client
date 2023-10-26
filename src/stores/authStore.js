import { defineStore } from "pinia"
import { Axios } from "../helpers/axios"

export const authStore = defineStore("auth", {
    state: () => ({
        access_token: localStorage.access_token
    }),
    getters: {

    },
    actions: {
        async handleLogin(form) {
            try {
                const {data} = await Axios({
                    method: "post",
                    url: "/login",
                    data: form
                })

                localStorage.setItem("access_token", data.access_token)
                this.access_token = localStorage.access_token
                this.$toast.success("Login Successfull")
                this.$router.push("/books")
            } catch (error) {
                this.$toast.error(error.response.data.message)
                console.log(error)
            }
        },
        async handleLogout() {
            localStorage.removeItem("access_token")
            this.access_token = null
            this.$toast.success("logout Successfull")
        },
        async handleRegister(form) {
            try {
                await Axios({
                    method: "post",
                    url: "/register",
                    data: form
                })

                this.$toast.success("Register successfull, now you can login")
                this.$router.push("/login")
            } catch (error) {
                this.$toast.error(error.response.data.message)
                console.log(error)
            }
        },
        async googleLogin(params) {
            try {
                const {credential} = params
                // console.log(credential)
                const response = await Axios({
                    method: "post",
                    url: "/auth/google",
                    headers: {
                        google_token: credential
                    }
                })

                localStorage.setItem("access_token", response.data)
                this.access_token = localStorage.access_token
                this.$toast.success("Login successfull")
                this.$router.push("/books")
            } catch (error) {
                console.log(error)
                this.$toast.error(error.response.data.message)
            }
        }
    }
})