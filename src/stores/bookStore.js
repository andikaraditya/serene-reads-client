import { defineStore } from "pinia"
import { Axios } from "../helpers/axios";

export const bookStore = defineStore("books", {
    state: () => ({
        books: [],
        book: null,
        postDetail: {},
        access_token: null
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
        },
        async handleCreatePost(form, BookId){
            // console.log(form)
            // console.log(BookId)
            try {
                const {data} = await Axios({
                    method: "post",
                    url: `/books/${BookId}/posts`,
                    data: form,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.fetchBookById(BookId)
                this.$router.push({name:"PostDetail", params: {
                    PostId: data.id
                }})
            } catch (error) {
                if (error.response.data.message === "User authentication failed") {
                    this.$toast.error("You need to login first")
                } else {
                    console.log(error)
                }
            }
        },
        async handleAddBook(form) {
            try {
                await Axios({
                    method: "post",
                    url: "/books",
                    data: form,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.fetchBooks()
                this.$router.push("/books")
            } catch (error) {
                if (error.response.data.message === "User authentication failed") {
                    this.$toast.error("You need to login first")
                } else if (error.response.data.message === "isbn must be unique") {
                    this.$router.push("/books")
                } else {
                    console.log(error)
                }
            }
        }
    }
})