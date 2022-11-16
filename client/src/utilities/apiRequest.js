/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

// Makes a request to an API.
export default async function apiRequest(url, method, body, authorization) {
  let response = null;
  let responseBody = null;

  try {
    // Check if there is a body object to send.
    if (body) {
      // Omit the request body log if it contains sensitive information.
      if ("password" in body
        || "currentPassword" in body
        || "newPassword" in body
      ) {
        console.log(`Request: ${method} ${url}`, "[Body omitted to hide sensitive information]");
      } else {
        console.log(`Request: ${method} ${url}`, body);
      }

      response = await fetch(url, {
        credentials: "include",
        method: method,
        body: JSON.stringify(body),
        headers: {"Content-Type": "application/json"}
      });

    } else {
      // Don't include the body if there is no valid body to send.
      console.log(`Request: ${method} ${url}`);
      response = await fetch(url, {
        credentials: "include",
        method: method,
        headers: {"Content-Type": "application/json"}
      });
    }

    console.log(`Response:`, response);
    responseBody = await getResponseBody(response);
    console.log("Response Body:", responseBody);

    // Check if the response was a 401 status code.
    // If it was then we will redirect to the login page.
    if (response && response.status === 401) {
      console.log("An unauthorized request was made. Returning to login page.");
      localStorage.setItem("authorization", "");
      window.location = "/login";
    }

  } catch (e) {
    // If an error occurs while attempting to make a request,
    // create a generic 500 internal server error and log the error.
    console.error(e);
    response = { ok: false, status: 500 };
  }

  return [response, responseBody];
}

// Attempt to get the response body.
async function getResponseBody(response) {
  const text = await response.text();
  try {
    const json = JSON.parse(text);
    return json;
  } catch (e) {
    return null;
  }
}