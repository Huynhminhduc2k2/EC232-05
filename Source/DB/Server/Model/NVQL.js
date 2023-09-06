import mongoose from "mongoose";

// Định nghĩa schema cho model NhanVienQuanLy
const nhanVienQuanLySchema = mongoose.Schema(
  {
    HoTen: {
      type: String,
      required: true,
    },
    GioiTinh: {
      type: String,
    },
    SDT: {
      type: String,
    },
    Email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const NhanVienQuanLy = mongoose.model("NhanVienQuanLy", nhanVienQuanLySchema);
