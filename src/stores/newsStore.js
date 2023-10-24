import { defineStore } from "pinia"
import { Axios } from "../helpers/axios";

export const newsStore = defineStore("news", {
    state: () => ({
        news: []
    }),
    getters: {

    },
    actions: {
        async fetchNews() {
            try {
                const {data} = await Axios({
                    method: "get",
                    url: "/news"
                })

                this.news = data
            } catch (error) {
                console.log(error)
            }
        }
    }
})