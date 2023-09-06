import mongoose from "mongoose";

const chiTietDanhMucSchema = mongoose.Schema(
  {
    MaDanhMuc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DanhMucSanPham',
    },
    MaSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SanPham',
    },
    NgayNhap: Date,
    GhiChu: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ChiTietDanhMuc = mongoose.model("ChiTietDanhMuc", chiTietDanhMucSchema);
