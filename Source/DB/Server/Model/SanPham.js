import mongoose from "mongoose";

const sanPhamSchema = mongoose.Schema(
    {
      TenSanPham: {
        type: String,
      },
      Gia: {
        type: Number,
      },
      SoLuong: {
        type: Number,
      },
      XuatSu: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const SanPham = mongoose.model("SanPham", sanPhamSchema);