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
        }
    }
})