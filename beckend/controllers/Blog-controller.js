const Blog = require("../model/Blog");

const createBlog = async (req, res) => {
  const { title, content, author, imageUrl } = req.body;

  try {
    const newBlog = await Blog.create({ imageUrl, title, content, author });
    res.status(201).json({
      success: true,
      message: "sucessfully created a Blog",
      data: newBlog,
      err: {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Not able to create a Blog",
      data: {},
      err: error,
    });
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (deletedBlog.imageUrl) {
      // delete image file from server
      fs.unlinkSync(path.join(__dirname, "..", "public", deletedBlog.imageUrl));
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting blog" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting blogs" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;
  const imageUrl = req.file ? `uploads/${req.file.filename}` : null;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    blog.title = title;
    blog.content = content;
    blog.author = author;
    if (imageUrl) {
      if (blog.imageUrl) {
        // delete old image file from server
        fs.unlinkSync(path.join(__dirname, "..", "public", blog.imageUrl));
      }
      blog.imageUrl = imageUrl;
    }
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating blog" });
  }
};

module.exports = {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
};
