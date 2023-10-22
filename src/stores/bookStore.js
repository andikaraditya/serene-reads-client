import { defineStore } from "pinia"
import { Axios } from "../helpers/axios";

export const bookStore = defineStore("books", {
    state: () => ({
        books: [],
        book: null,
        postDetail: {}
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
        },
        async fetchBookById(id){
            try {
                const {data} = await Axios({
                    method: "get",
                    url: `/books/${id}`
                })

                this.book = data
            } catch (error) {
                console.log(error)
            }
        },
        async fetchPostById(BookId, PostId){
            try {
                const {data} = await Axios({
                    method: "get",
                    url: `/books/${BookId}/posts/${PostId}`
                })

                this.postDetail = data
            } catch (error) {
                console.log(error)
            }
        }
    }
})