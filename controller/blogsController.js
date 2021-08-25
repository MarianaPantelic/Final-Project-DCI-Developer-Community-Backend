const Blog = require("../models/Blog");

/**
 * controller for the blogs
 */

exports.getBlogs = async (req, res, next) => {
  //get all records
  try {
    const blogs = await Blog.find().populate("user", "firstName");
    console.log("blogs" + blogs);
    res.status(200).send(blogs);
  } catch (error) {
    //console.log(error);
    //forward the error to the error handler
    next(error);
  }
};

exports.getBlog = async (req, res, next) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    res.status(200).send(blog);
  } catch (error) {
    next(error);
  }
};

exports.addBlog = async (req, res, next) => {
  try {
    var data = {
      title: req.body.title,
      content: req.body.content,
      likes: 0,
      user: req.user._id,
      whoClicked: [],
      image: req.body.image,
      // userName: req.body.userName,
    };
    console.log(data);
    console.log(req.user);
    const blog = new Blog(data);
    await blog.save();
    res.status(200).send(blog);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateBlogs = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(blog);
  } catch (e) {
    next(e);
  }
};

exports.increaseLikes = async (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(id, dt, { new: true });
    res.status(200).send(blog);
  } catch (error) {
    next(error);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) throw new createError.NotFound();
    res.status(200).send(blog);
  } catch (e) {
    next(e);
  }
};
