import mongoose from "mongoose";

const gioHangSchema = mongoose.Schema(
    {
      NgayThem: Date,
      TinhTrangGio: String,
      MaThanhVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ThanhVien',
      },
    },
    {
      timestamps: true,
    }
  );
  
  const GioHang = mongoose.model("GioHang", gioHangSchema);