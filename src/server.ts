import fetch from "node-fetch";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import PhotoAPI from "./libs/unsplash/index";

// @ts-ignore
global.fetch = fetch;
dotenv.config();

const unsplash = PhotoAPI.initialize();
const api = express();

api.use(cors({ origin: process.env.CLIENT_URL }));
api.use(morgan("tiny"));
api.get("/photos", async (req: express.Request, res: express.Response) => {
  const { query } = req;
  const response = await unsplash.getRandomPhoto({
    query: query.search || ""
  });
  const data = await response.json();

  if (response.status >= 200 && response.status <= 299) {
    return res.json(data);
  }

  res.status(response.status);
  return res.json(data);
});

api.post(
  "/photos/download",
  async (req: express.Request, res: express.Response) => {
    const { query } = req;
    const response = await unsplash.downloadPhoto({
      links: { download_location: query.location }
    });
    const data = await response.json();

    if (response.status >= 200 && response.status <= 299) {
      return res.json(data);
    }

    res.status(response.status);
    return res.json(data);
  }
);

const PORT = 8000;
api.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
