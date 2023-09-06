import mongoose from "mongoose";

const chiTietGioHangSchema = mongoose.Schema(
    {
      MaGioHang: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GioHang',
      },
      MaSanPham: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SanPham',
      },
      SoLuongHang: Number,
    },
    {
      timestamps: true,
    }
  );
  
  const ChiTietGioHang = mongoose.model("ChiTietGioHang", chiTietGioHangSchema);
  