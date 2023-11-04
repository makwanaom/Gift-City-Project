import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    location: { type: String, required: true },

    price: { type: Number, required: true },

    description: { type: String, required: true },
    
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;