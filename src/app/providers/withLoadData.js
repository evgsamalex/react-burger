import {useDispatch} from "react-redux";
import {fetchIngredientsAsync} from "../../services/actions/fetchIngredientsAsync";
import {checkUserAsync} from "../../services/actions/user/checkUserAsync";

const WithLoadData = (component) => {
  return function LoadData() {
    const dispatch = useDispatch();
    dispatch(fetchIngredientsAsync());
    dispatch(checkUserAsync());
    return component();
  }
};

export default WithLoadData;

