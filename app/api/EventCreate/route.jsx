import Event from "../../../models/Events"; // Assuming you have a Mongoose model named 'Event'

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).json(event);
    } catch (error) {
      console.log("this is error or ")
      res.status(500).json({ error: "Failed to create the event" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
