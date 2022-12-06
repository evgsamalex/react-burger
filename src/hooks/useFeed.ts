import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {TWsActions} from "../services/reducers/web-socket";
import {useAppSelector} from "../services/hooks";
import {TWsState} from "../services/reducers/web-socket/create-slice";
import {RootState} from "../services/types";

export const useFeed = (actions: TWsActions, stateSelector: (state: RootState) => TWsState, dispose = true) => {

  const {connected, error} = useAppSelector(stateSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.start());
    return () => {
      if (dispose)
        dispatch(actions.stop())
    }
  }, [])

  return {connected, error}
}
