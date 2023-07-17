import { useSelector } from "react-redux";
import { RootState } from "..";

const useUser = () => useSelector((state: RootState) => state.user.user)

export { useUser }