import createSocketSlice from "./create-slice";
import {WsType} from "../../../types/wsType";

export const wsOrdersSlice = createSocketSlice(WsType.Orders);

export const wsOrdersActions = wsOrdersSlice.actions;

export const stateSelector = state => state.wsOrders;

export default wsOrdersSlice.reducer;
