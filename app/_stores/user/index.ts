import { createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"

const initialState = {
    isLoggedIn: typeof window !== 'undefined' && localStorage.getItem("user") ? true : false,
    user: typeof window !== 'undefined' && JSON.parse(localStorage.getItem("user") || '{}')
}

const user = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        _login: (state, action) => {
            state.user = jwtDecode(action.payload)
            state.isLoggedIn = true
            console.log(state.user)
            localStorage.setItem("token", action.payload)
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        _logout: (state) => {
            state.isLoggedIn = false
            state.user = {}
            localStorage.removeItem("user")
        }
    }
})

export const { _login, _logout } = user.actions
export default user.reducer