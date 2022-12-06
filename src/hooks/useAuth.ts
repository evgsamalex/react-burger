import {useAppSelector} from "../services/hooks";
import {TUser} from "../services/types/data";

type TUseAuth = {
  auth: boolean;
  user: TUser | null;

  isLoading: boolean,

  error: string
}

export const useAuth = (): TUseAuth => {
  const state = useAppSelector(state => state.auth);

  return {auth: state.auth, user: state.user, error: state.error, isLoading: state.isLoading};
}
