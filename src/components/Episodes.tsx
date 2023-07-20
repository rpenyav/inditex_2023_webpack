import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/root-reducer";

import { Episode } from "../redux/detail";
import { fetchEpisodes } from "../redux/detail";
import { AppDispatch } from "../redux/store";
import { formatDate, formatDuration } from "../utils/functions";
import { Link } from "react-router-dom";

interface Props {
  podcastId?: string;
}

const Episodes: React.FC<Props> = ({ podcastId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const episodes = useSelector((state: RootState) => state.episodes.episodes);
  const isLoaded = useSelector((state: RootState) => state.episodes.isLoaded);

  useEffect(() => {
    dispatch(fetchEpisodes(podcastId!));
  }, [dispatch, podcastId]);

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h5>Episodes {episodes.length}</h5>
        </div>
      </div>

      <div className="card mb-5">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {episodes.map((episode: Episode) => (
                  <tr key={episode.trackId}>
                    <td>
                      <Link
                        className="blue-link"
                        to={`/podcast/${podcastId}/episode/${episode.trackId}`}
                      >
                        <strong>{episode.trackName}</strong>
                      </Link>
                    </td>
                    <td>{formatDate(episode.releaseDate)}</td>
                    <td>{formatDuration(episode.trackTimeMillis)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
