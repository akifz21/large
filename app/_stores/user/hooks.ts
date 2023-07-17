import { useSelector } from "react-redux";
import { RootState } from "..";

const useUser = () => useSelector((state: RootState) => state.user.user)
const useIsLoggedIn = () => useSelector((state: RootState) => state.user.isLoggedIn)

export { useUser, useIsLoggedIn }