import express from "express";

import userRoutes from "../routes/userRoutes";
import postRoutes from "../routes/postRoutes";

import authorize from "../middlewares/auth";

const routes = express.Router();

//User Routes
routes.use("/user", userRoutes);

//Post Routes
routes.use("/post", postRoutes);

export default routes;
