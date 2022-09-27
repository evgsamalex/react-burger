import {useDispatch} from "react-redux";
import {fetchIngredientsAsync} from "../../services/actions/fetchIngredientsAsync";

const WithLoadData = (component) => {
  return function LoadData() {
    const dispatch = useDispatch();
    dispatch(fetchIngredientsAsync());
    return component();
  }
};

export default WithLoadData;

