import mongoose from "mongoose";

const phuongThucThanhToanSchema = mongoose.Schema(
    {
      TenPhuongThuc: {
        type: String,
      },
      MoTa: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const PhuongThucThanhToan = mongoose.model("PhuongThucThanhToan", phuongThucThanhToanSchema);