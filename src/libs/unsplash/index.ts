import Unsplash, { UnsplashApi } from "unsplash-js";

function PhotoApi() {
  function initialize() {
    const unsplash: UnsplashApi.Photo = new Unsplash({
      applicationId: process.env.UNSPLASH_APP_KEY || "",
      secret: process.env.UNSPLASH_SECRET_KEY || ""
    }).photos;

    return unsplash;
  }

  return { initialize };
}

export default PhotoApi();
