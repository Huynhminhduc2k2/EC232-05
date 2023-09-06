import mongoose from "mongoose";

const donHangSchema = mongoose.Schema(
    {
      TinhTrangDon: String,
      MaThanhVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ThanhVien',
      },
      MaPhuongThuc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PhuongThucThanhToan',
      },
    },
    {
      timestamps: true,
    }
  );
  
  const DonHang = mongoose.model("DonHang", donHangSchema);
  