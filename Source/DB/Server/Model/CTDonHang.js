import mongoose from "mongoose";

const chiTietDonHangSchema = mongoose.Schema(
    {
      MaDonHang: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DonHang',
      },
      MaSanPham: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SanPham',
      },
      ThanhTien: Number,
      NgayLap: Date,
    },
    {
      timestamps: true,
    }
  );
  
  const ChiTietDonHang = mongoose.model("ChiTietDonHang", chiTietDonHangSchema);
  