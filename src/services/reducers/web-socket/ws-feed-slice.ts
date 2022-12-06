import createSocketSlice from "./create-slice";
import {RootState} from "../../types";
import {WsType} from "../../types/feed";

export const wsFeedSlice = createSocketSlice(WsType.Feed);

export const wsFeedActions = wsFeedSlice.actions;

export const stateSelector = (state: RootState) => state.wsFeed;

export default wsFeedSlice.reducer;
