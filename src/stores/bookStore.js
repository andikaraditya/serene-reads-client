import { defineStore } from "pinia"
import { Axios } from "../helpers/axios";

export const bookStore = defineStore("books", {
    state: () => ({
        books: [],
        book: {}
    }),
    getters: {

    },
    actions: {
        async fetchBooks(){
            try {
                const {data} = await Axios({
                    method: "get",
                    url: "/books"
                })

                this.books = data
            } catch (error) {
                console.log(error)
            }
        }
    }
})