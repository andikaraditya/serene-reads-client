import { defineStore } from "pinia"
import { Axios } from "../helpers/axios";

export const newsStore = defineStore("news", {
    state: () => ({
        news: [],
        isBusy: false,
        counter: 1
    }),
    getters: {

    },
    actions: {
        async fetchNews() {
            try {
                if (this.news.length > 90) {
                    this.$toast.info("This is the end of the page. We cannot get more news due our limitation. We apologize for this inconvenience", {
                    timeout: 15000
                    })
                    return
                } 
                this.isBusy = true
                const {data} = await Axios({
                    method: "get",
                    url: "/news",
                    params: {
                        page: this.counter
                    }
                })

                this.news.push(...data)
                this.counter += 1
                this.isBusy = false
            } catch (error) {
                console.log(error)
            }
        }
    }
})