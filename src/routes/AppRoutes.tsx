import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";

import { DetailViewPage, DetailViewEpisode, HomePageView } from "../components";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/podcast/:podcastId" element={<DetailViewPage />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<DetailViewEpisode />}
        />
      </ReactRoutes>
    </Router>
  );
};

export default AppRoutes;