import express from "express";
import properties from "../package.json" assert { type: "json" };

const aboutRoute = express.Router();

aboutRoute.get("/", (req, res) => {
  const aboutInfo = {
    name: properties.name,
    description: properties.description,
    author: properties.author,
  };
  res.json(aboutInfo);
});

export default aboutRoute;
