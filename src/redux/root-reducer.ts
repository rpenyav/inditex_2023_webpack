import { combineReducers } from "@reduxjs/toolkit";
// import podcastsReducer from "./List/musicalbumsReducer";
// import musicAlbumsDetailReducer from "./Detail/detailAlbumReducer";
// import episodesReducer from "./Detail/episodesReducer";
// import getPodcastByIdSlice from "./Detail/podcastByIdReducer";

const rootReducer = combineReducers({
  //   podcasts: podcastsReducer,
  //   albumDetails: musicAlbumsDetailReducer,
  //   episodes: episodesReducer,
  //   getPodcastById: getPodcastByIdSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
