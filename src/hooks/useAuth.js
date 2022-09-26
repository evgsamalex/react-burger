import {useSelector} from "react-redux";

export const useAuth = () => {
  const state = useSelector(state => state.auth);
  return [state.auth, state.user, state.isLoading, state.error];
}
