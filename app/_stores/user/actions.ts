import store from "..";
import { _login, _logout } from ".";

const login = (user: any) => store.dispatch(_login(user))
const logout = () => store.dispatch(_logout())

export { login, logout }

