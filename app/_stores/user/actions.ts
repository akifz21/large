import store from "..";
import { _login, _logout, _setInitial } from ".";

const login = (user: any) => store.dispatch(_login(user))
const logout = () => store.dispatch(_logout())
const setInitial = ()=> store.dispatch(_setInitial())

export { login, logout,setInitial }

