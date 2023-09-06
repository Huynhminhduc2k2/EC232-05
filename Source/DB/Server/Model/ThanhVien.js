import mongoose from "mongoose";

const thanhVienSchema = mongoose.Schema(
  {
    HoTen: {
      type: String,
      required: true,
    },
    GioiTinh: {
      type: String,
    },
    NamSinh: {
      type: String,
    },
    SDT: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Để bật tính năng tự động tạo "createdAt" và "updatedAt"
  }
);

const ThanhVien = mongoose.model("ThanhVien", thanhVienSchema);


