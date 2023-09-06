import mongoose from "mongoose";

const danhGiaSchema = mongoose.Schema(
  {
    Diem: {
      type: Number,
      require: true,
    },
    MaThanhVien: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ThanhVien',
      require: true,
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

const DanhGia = mongoose.model("DanhGia", danhGiaSchema);