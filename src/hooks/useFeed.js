import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const useFeed = (actions, stateSelector, dispose = true) => {

  const {connected, error} = useSelector(stateSelector);

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
