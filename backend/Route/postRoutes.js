const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const Post = require('../Modal/Blog');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });



async function uploadToCloudinary(buffer, filename) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: "image", folder: "posts", public_id: filename },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    ).end(buffer);
  });
}

function generateSlug(heading) {
  return heading
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}
// Endpoint: Upload image (used for both background and embedded images)
router.post("/upload-image", upload.single("mainImage"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    const result = await uploadToCloudinary(req.file.buffer, req.file.originalname);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload image" });
  }
});

// Endpoint: Create post
router.post("/", async (req, res) => {
  try {
    const { heading, title, description, content, mainImage, embeddedImages  } = req.body;

    const slug = generateSlug(heading);

    const post = new Post({
      heading,
      title,  
      slug,          
      description,       
      content,
      mainImage,
      embeddedImages: embeddedImages || [],
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

router.get("/all-posts", async (req, res) => {
  try {
    const posts = await Post.find({}, "heading slug  mainImage  createdAt") // select only needed fields
      .sort({ createdAt: -1 }); // optional: newest first

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

router.get("/all-posts-second", async (req, res) => {
  try {
    const posts = await Post.find({}, "heading slug title description mainImage content createdAt") 
      .sort({ createdAt: -1 }); 

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

router.get("/blog/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await Post.findOne(
  { slug },
  "heading slug content title description mainImage embeddedImages createdAt updatedAt"
);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch post" });
  }
});


router.delete("/delete-posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

router.put("/update-post/:id", async (req, res) => {
  try {
    const {heading, title, description, content, mainImage, embeddedImages } = req.body;
     
    const slug = heading ? generateSlug(heading) : undefined;

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { heading, title, description, content, mainImage, embeddedImages,...(slug && { slug }) },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ error: "Failed to update post" });
  }
});

module.exports = router;