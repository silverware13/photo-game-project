/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React, { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import PageTitle from "../../components/PageTitle/PageTitle";
import Card from "../../components/Card/Card";
import Photo from "./Photo/Photo";
import Error500Page from "../Error500Page/Error500Page";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import {API} from "../../utilities/constants";
import "./BrowsePage.scss";

// Page for browsing an album.
export default function BrowsePage() {
  const [loading, setLoading] = useState(false);
  const [failedToLoad, setFailedToLoad] = useState(false);
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  // Get photos from the current album.
  useApi(
    () => {
      setLoading(true);
      return true;
    },
    {
      method: "GET",
      url: `${API}/album/${albumId}`
    },
    async (response, responseBody) => {
      if (response.ok && responseBody) {
        setPhotos(responseBody.photos);
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

      <Card title="Browsing Album">
        <div className="m-3">
          <div className="row align-items-center">
            {photos.map(photo =>
              <div className="col-6">
                <Photo
                  key={photo.photoId}
                  photoId={photo.photoId}
                  answer={photo.answer}
                  imageUrl={photo.imageUrl}
                />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
    )
  );
}