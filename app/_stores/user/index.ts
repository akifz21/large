import { createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"

const initialState = {
    isLoggedIn:   false,
    user: { id: 0, email: "", last_name: "", first_name:"" }
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
            state.user = { id: 0, email: "", last_name: "", first_name: "" }
            localStorage.removeItem("user")
        },
        _setInitial : (state)=>{
            if (localStorage.getItem("user") && localStorage.getItem("token")) {
                state.user = JSON.parse(localStorage.getItem("user") || '{}')
                state.isLoggedIn = true
            }
        }
    }
})

export const { _login, _logout,_setInitial } = user.actions
export default user.reducer