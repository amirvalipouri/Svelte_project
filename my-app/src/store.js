
import {writable} from "svelte/store"
const user = writable({})
const isLoggedIn = writable(false)
const isModalOpen = writable(false)
const token = writable("")
export  {user , isLoggedIn , isModalOpen, token}

 