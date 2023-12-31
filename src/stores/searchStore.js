import { defineStore } from "pinia"
import { Axios } from "../helpers/axios";

export const searchStore = defineStore("search", {
    state: () => ({
        categories: ['Mystery & Suspense', 'Science Fiction & Fantasy', 'Animals, Bugs & Pets', 'Art, Creativity & Music', 'General Literature', 'Hobbies, Sports & Outdoors', 'Science & Technology', 'Real Life','Reference'],
        searchResults: [],
        loading: true
    }),
    getters: {

    },
    actions: {
        async handleSearch(form){
            this.loading = true
            try {
                const query = {}
                for (const key in form) {
                    if (Array.isArray(form[key]) && form[key].length > 0) {
                        query[key] = form[key].join(";")
                        continue
                    } else {
                        if (form[key]) {
                            query[key] = form[key]
                        }
                    }
                }

                // console.log(query)
                const {data} = await Axios({
                    method: "get",
                    url: "/books/search",
                    params: query
                })

                this.$router.push({path: "/search", query: query})

                //! 1 api call per second
                setTimeout(() => {
                    this.searchResults = data
                    this.loading = false
                }, 800);
            } catch (error) {
                console.log(error)
            }
        }
    },
})

