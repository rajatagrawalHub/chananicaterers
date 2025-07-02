const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://swonlineUser:KmhgPQtWTP3XKT1H@mainclusterm0.wec8a.mongodb.net/chananicaterers?retryWrites=true&w=majority&appName=MainClusterM0");
const Item = mongoose.model("Item", new mongoose.Schema({
  name: String,
  type: String,
  imageName: String,
  category: String,
}));

app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(3000, () => console.log("Server running on port 3000"));
