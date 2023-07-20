import { combineReducers } from "@reduxjs/toolkit";
import podcastsReducer from "./list/musicAlbumsReducer";
import getPodcastByIdSlice from "./detail/podcastByIdReducer";

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  getPodcastById: getPodcastByIdSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
