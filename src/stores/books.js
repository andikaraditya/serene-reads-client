import { defineStore } from "pinia"

export const bookStore = defineStore("book", {
    state: () => ({
        categories: ['Mystery & Suspense', 'Science Fiction & Fantasy', 'Animals, Bugs & Pets', 'Art, Creativity & Music', 'General Literature', 'Hobbies, Sports & Outdoors', 'Science & Technology', 'Real Life','Reference']
    }),
    getters: {

    },
    actions: {

    },
})

