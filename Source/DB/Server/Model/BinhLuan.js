import mongoose from "mongoose";

const binhLuanSchema = mongoose.Schema(
    {
      NoiDung: {
        type: String,
      },
      MaThanhVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ThanhVien',
      },
      MaSanPham: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SanPham',
      },
    },
    {
      timestamps: true,
    }
  );
  
  const BinhLuan = mongoose.model("BinhLuan", binhLuanSchema);