import mongoose from "mongoose";

const danhSachQuanLySchema = mongoose.Schema(
    {
      MaNhanVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NhanVienQuanLy',
      },
      MaTaiKhoan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaiKhoan',
      },
      ThoiGian: Date,
    },
    {
      timestamps: true,
    }
  );
  
  const DanhSachQuanLy = mongoose.model("DanhSachQuanLy", danhSachQuanLySchema);