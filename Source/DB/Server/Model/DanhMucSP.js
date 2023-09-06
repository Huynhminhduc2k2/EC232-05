import mongoose from "mongoose";

const danhMucSanPhamSchema = mongoose.Schema(
    {
      TenDanhMuc: {
        type: String,
      },
      SoLuong: {
        type: Number,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const DanhMucSanPham = mongoose.model("DanhMucSanPham", danhMucSanPhamSchema);
  