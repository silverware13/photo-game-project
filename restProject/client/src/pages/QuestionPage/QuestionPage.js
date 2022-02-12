/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import PageTitle from "../../components/PageTitle/PageTitle";
import Card from "../../components/Card/Card";
import Error500Page from "../Error500Page/Error500Page";
import useApi from "../../hooks/useApi";
import apiRequest from "../../utilities/apiRequest";
import { useParams, useHistory } from "react-router-dom";
import {API} from "../../utilities/constants";
import "./QuestionPage.scss";

// Page for displaying multiple choice pictures.
export default function QuestionPage() {
  const [loading, setLoading] = useState(false);
  const [failedToLoad, setFailedToLoad] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [correctPhoto, setCorrectPhoto] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { albumId } = useParams();
  const history = useHistory();

  // If the current album changes, reset the score.
  useEffect(() => {
    setScore(0);
  }, [albumId]);

  // Get album data.
  useApi(
    () => {
      if (!gameOver) {
        setLoading(true);
        return true;
      }
    },
    {
      method: "GET",
      url: `${API}/album/${albumId}/question`
    },
    async (response, responseBody) => {
      if (response.ok && responseBody) {
        setPhotos(responseBody.photos);
        setCorrectPhoto(responseBody.photos[Math.floor(Math.random() * responseBody.photos.length)]);
      } else {
        setFailedToLoad(true);
      }
      setLoading(false);
    },
    [score, gameOver]
  );

  // Guess a specific answer.
  async function guess(photoId, score) {
    if (photoId === correctPhoto.photoId) {
      setScore(prevScore => prevScore + 1);
    } else {
      setGameOver(true);
      setLoading(true);
      const requestBody = {
        score: score
      }
      await apiRequest(
        `${API}/album/${albumId}/score`,
        "PUT",
        requestBody
      );
      setLoading(false);
    }
  }

  // Restart the game with the current album.
  function tryAgain() {
    setScore(0);
    setGameOver(false);
  }

  return (
    failedToLoad ? (
      <Error500Page />
    ) : (
    <div className="page-question mb-5">
      <Spinner loading={loading} />

      <PageTitle title="Photo Game" />

      {gameOver ? (
        <Card title="Game Over">
          {correctPhoto !== null && (
            <img id="guess-image" src={correctPhoto.imageUrl} alt="Correct answer" />
          )}
          <h1>Game Over</h1>
          <h4>The correct answer was {correctPhoto.answer}</h4>
          <h4>Your score was {score}</h4>

          <div className="row mt-3 mb-5">
            <div className="col">
              <button className="button-guess btn btn-primary" onClick={() => tryAgain()}>
                Try Again
              </button>
            </div>
            <div className="col">
              <button className="button-guess btn btn-secondary" onClick={() => history.push("/")}>
                Quit
              </button>
            </div>
          </div>
        </Card>

      ) : (
        <Card title="Select the Correct Answer">
          {correctPhoto !== null && (
            <img id="guess-image" src={correctPhoto.imageUrl} alt="Guess this animal" />
          )}
            <h1>Current Score</h1>
            <div id="score">{score}</div>

          {photos.length >= 4 && (
            <div className="photo-options mb-5">
              <div className="row my-3">
                <div className="col">
                  <button className="button-guess btn btn-primary" onClick={() => guess(photos[0].photoId, score)}>
                    {photos[0].answer}
                  </button>
                </div>
                <div className="col">
                  <button className="button-guess btn btn-primary" onClick={() => guess(photos[1].photoId, score)}>
                    {photos[1].answer}
                  </button>
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <button className="button-guess btn btn-primary" onClick={() => guess(photos[2].photoId, score)}>
                    {photos[2].answer}
                  </button>
                </div>
                <div className="col">
                  <button className="button-guess btn btn-primary" onClick={() => guess(photos[3].photoId, score)}>
                    {photos[3].answer}
                  </button>
                </div>
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
    )
  );
}