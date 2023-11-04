import mongoose, { Schema, models } from "mongoose";

const eventSchema = new Schema(
  {
    title: "string",

    location: "string",
    price: "number",
    description: "string",
    // img: "string (URL)",
  },
  { timestamps: true }
);
const Event = models?.Event || mongoose.model("Event", eventSchema);

export default Event;

// mobile sndown thai gayou
