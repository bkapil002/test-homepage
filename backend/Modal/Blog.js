const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  title: { type: String },
  description:{type: String  },
  content: { type: String, required: true }, 
  mainImage: { type: String },
  embeddedImages: [{ type: String }],
  slug: { type: String, required: true, unique: true }
}, { timestamps: true });

PostSchema.pre("save", function (next) {
  if (!this.slug && this.heading) {
    this.slug = this.heading
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")       
      .replace(/[^\w\-]+/g, ""); 
  }
  next();
});

module.exports = mongoose.model('Post', PostSchema);