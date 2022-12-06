import createSocketSlice from "./create-slice";
import {RootState} from "../../types";
import {WsType} from "../../types/feed";

export const wsOrdersSlice = createSocketSlice(WsType.Orders);

export const wsOrdersActions = wsOrdersSlice.actions;

export const stateSelector = (state: RootState) => state.wsOrders;

export default wsOrdersSlice.reducer;
