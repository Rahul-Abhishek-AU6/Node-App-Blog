import Post from "../models/userModel";

const services = {};

//==========================================Create Service==========================================
services.create = (data) =>
  new Promise(async (res, rej) => {
    try {
      const post = await new Post({
        data,
      }).save();

      res({
        post,
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get Post Service==========================================
services.getPost = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const post = await Post.findById(_id);

      res(post);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update Post Service==========================================
services.updatePost = (_id, data) =>
  new Promise(async (res, rej) => {
    try {
      const post = await User.findByIdAndUpdate(_id, data, {
        new: true,
      });

      res(post);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Delete Post Service==========================================
services.delete = (_id) =>
  new Promise(async (res, rej) => {
    try {
      await User.deleteOne(_id);

      res("deleted Successfully");
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get ALL Post Service==========================================
services.getAll = (_id, data) =>
  new Promise(async (res, rej) => {
    try {
      const post = await User.find();

      res(post);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default services;
