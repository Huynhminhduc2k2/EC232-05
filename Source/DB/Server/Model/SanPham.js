import mongoose from "mongoose";

const sanPhamSchema = mongoose.Schema(
    {
      TenSanPham: {
        type: String,
      },
      Gia: {
        type: Number,
      },
      DonVi: {
        type: String,
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