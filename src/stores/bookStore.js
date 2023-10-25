import { defineStore } from "pinia"
import { Axios } from "../helpers/axios";

export const bookStore = defineStore("books", {
    state: () => ({
        books: [],
        book: null,
        postDetail: {},
        access_token: null,
        isBusy: false,
    }),
    getters: {

    },
    actions: {
        async fetchBooks(mode, params){
            try {
                this.isBusy = true
                const {data} = await Axios({
                    method: "get",
                    url: "/books",
                    params: params
                })

                
                this.$router.push({path: "/books", query: params})
                if (mode === "page") {
                    this.books = data
                } else if (mode === "scroll") {
                    if (data.length === 0) {
                        this.$toast.info("This is the end of the page. There is no more available communities. Go to search page to add more communities", {
                        timeout: 15000
                        })
                        return
                    }
                    this.books.push(...data)
                }
                setTimeout(() => {
                    this.isBusy = false
                }, 1500);
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