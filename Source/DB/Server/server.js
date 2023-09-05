import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser"; // Thêm body-parser để xử lý dữ liệu gửi lên

dotenv.config();

const uri = process.env.MONGODB_URI; // Thay thế URI kết nối MongoDB bằng biến môi trường

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();

const app = express();

app.use(bodyParser.json()); // Sử dụng body-parser để xử lý JSON data

app.get("/", (req, res) => {
  // Xử lý tuyến đường GET "/"
  res.send("Hello, World!");
});
// Định nghĩa cái ThanhVien
const ThanhVien = mongoose.model('ThanhVien', new mongoose.Schema({
  HoTen: String,
  GioiTinh: String,
  NamSinh: String,
  SDT: String,
  Email: String,
}));

app.post("/post", async (req, res) => {
  console.log("inside post function");

  const data = new ThanhVien({
    HoTen: req.body.HoTen,
    GioiTinh: req.body.GioiTinh,
    NamSinh: req.body.NamSinh,
    SDT: req.body.SDT,
    Email: req.body.Email,
  });

  try {
    const val = await data.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

const port = process.env.PORT; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
