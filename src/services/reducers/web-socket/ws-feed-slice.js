import createSocketSlice from "./create-slice";
import {WsType} from "../../../types/wsType";

export const wsFeedSlice = createSocketSlice(WsType.Feed);

export const wsFeedActions = wsFeedSlice.actions;

export const stateSelector = state => state.wsFeed;

export default wsFeedSlice.reducer;
