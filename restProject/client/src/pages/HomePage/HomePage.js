/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React, { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import PageTitle from "../../components/PageTitle/PageTitle";
import Card from "../../components/Card/Card";
import Album from "./Album/Album";
import Error500Page from "../Error500Page/Error500Page";
import useApi from "../../hooks/useApi";
import {API} from "../../utilities/constants";
import "./HomePage.scss";

// Home page.
export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [failedToLoad, setFailedToLoad] = useState(false);
  const [albums, setAlbums] = useState([]);

  // Get album data.
  useApi(
    () => {
      setLoading(true);
      return true;
    },
    {
      method: "GET",
      url: `${API}/album`
    },
    async (response, responseBody) => {
      if (response.ok && responseBody) {
        setAlbums(responseBody.albums);
      } else {
        setFailedToLoad(true);
      }
      setLoading(false);
    },
    []
  );

  return (
    failedToLoad ? (
      <Error500Page />
    ) : (
    <div className="page-home mb-5">
      <Spinner loading={loading} />

      <PageTitle title="Photo Game" />

      <Card title="Select an Album">
        <div className="m-3">
        {albums.map(album =>
          <Album
            key={album.albumId}
            albumId={album.albumId}
            name={album.name}
            personalHighScore={album.personalHighScore}
            globalHighScore={album.globalHighScore}
            globalUser={album.globalUser}
          />
        )}
        </div>
      </Card>
    </div>
    )
  );
}