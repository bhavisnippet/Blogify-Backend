const mongoose = require("mongoose");
const blogifySchema = new mongoose.Schema(

    {
        topic: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    }, { timestamps: true });

module.exports = mongoose.model("Blog", blogifySchema, "blog");