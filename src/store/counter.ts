import { defineStore } from "pinia";

export const useCouterStore = defineStore('counter', {
    state: ()=> ({count: 0, name: 'haran'}),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        }
    }
});