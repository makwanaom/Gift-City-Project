import mongoose, { Schema, models } from "mongoose";

const commentSchema = new Schema(
  {
    username:{
      type:String,
      require:true,
    },
    email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },
    confirmPassword: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const comment = models?.User || mongoose.model("Comment", commentSchema);

export default comment;

// mobile sndown thai gayou