import mongoose from "mongoose";

const taiKhoanSchema = mongoose.Schema(
    {
      TenTaiKhoan: {
        type: String,
      },
      MatKhau: {
        type: String,
      },
      MaThanhVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ThanhVien',
      },
    },
    {
      timestamps: true,
    }
  );
  
  const TaiKhoan = mongoose.model("TaiKhoan", taiKhoanSchema);
  