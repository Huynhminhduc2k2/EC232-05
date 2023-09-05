import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = 'mongodb+srv://admin:0335597676Huan@demo1.gky5n1m.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();  // gọi hàm connect()

const app = express();

app.get("/", (req, res) => {
  // Xử lý tuyến đường GET "/"
  res.send("Hello, World!");
});

const ThanhVien = mongoose.model('ThanhVien', new mongoose.Schema({
  HoTen: String,
  GioiTinh: String,
  NamSinh: String,
  SDT: String,
  Email: String,
}));

app.post("/post", async(req, res)=>{
  console.log("inside post function");

  const data = new ThanhVien({
    HoTen:req.body.HoTen,
    GioiTinh:req.body.GioiTinh,
    NamSinh:req.body.NamSinh,
    SDT:req.body.SDT,
    Email:req.body.Email
  });

  const val = await data.save();
  res.json(val);

})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
