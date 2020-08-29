import Post from "../models/userModel";
import service from "../services/postService";
import { handleErrors } from "../errorHandlers/ErrorHandlers";
import logout from "../services/logoutService";

const controller = {};

//Create Post
controller.create = async (req, res) => {
  try {
    //Create new post
    const post = await service.create(req.body);

    res.status(201).json(post);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Get Post
controller.get = async (req, res) => {
  try {
    //Get Post
    const post = await service.getPost(req._id);

    res.status(201).json(post);
  } catch (e) {
    handleErrors(e, res);
  }
};

//UPDATE Post
controller.update = async (req, res) => {
  try {
    const post = await service.updatePost(req._id, req.body);

    res.status(201).json(post);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Delete Post
controller.delete = async (req, res) => {
  try {
    const message = await service.delete(req._id, req);

    res.status(200).json(message);
  } catch (e) {
    handleErrors(e, res);
  }
};

//GET All Post
controller.getAll = async (req, res) => {
  try {
    const post = await service.getAll(req.body);

    res.status(200).json(post);
  } catch (e) {
    handleErrors(e, res);
  }
};

export default controller;
