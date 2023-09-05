import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser"; // Thêm body-parser để xử lý dữ liệu gửi lên

dotenv.config();

const uri = process.env.MONGODB_URI; // Thay thế URI kết nối MongoDB bằng biến môi trường

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();

const app = express();

app.use(bodyParser.json()); // Sử dụng body-parser để xử lý JSON data

app.get("/", (req, res) => {
  // Xử lý tuyến đường GET "/"
  res.send("Hello, World!");
});

const ThanhVien = mongoose.model('ThanhVien', new mongoose.Schema({
  HoTen: String,
  GioiTinh: String,
  NamSinh: String,
  SDT: String,
  Email: String,
}));

const NhanVienQuanLy = mongoose.model('NhanVienQuanLy', new mongoose.Schema({
  HoTen: String,
  GioiTinh: String,
  SDT: String,
  Email: String,
}));

const TaiKhoan = mongoose.model('TaiKhoan', new mongoose.Schema({
  TenTaiKhoan: String,
  MatKhau: String,
  MaThanhVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThanhVien',
  },
}));

const GioHang = mongoose.model('GioHang', new mongoose.Schema({
  NgayThem: Date,
  TinhTrangGio: String,
  MaThanhVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThanhVien',
  },
}));

const DonHang = mongoose.model('DonHang', new mongoose.Schema({
  TinhTrangDon: String,
  MaThanhVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThanhVien',
  },
  MaPhuongThuc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PhuongThucThanhToan',
  },
}));

const SanPham = mongoose.model('SanPham', new mongoose.Schema({
  TenSanPham: String,
  Gia: Number,
  DonVi: String,
  XuatSu: String,
}));

const BinhLuan = mongoose.model('BinhLuan', new mongoose.Schema({
  NoiDung: String,
  MaThanhVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThanhVien',
  },
  MaSanPham: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SanPham',
  },
}));

const DanhGia = mongoose.model('DanhGia', new mongoose.Schema({
  Diem: Number,
  MaThanhVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThanhVien',
  },
  MaSanPham: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SanPham',
  },
}));

const DanhMucSanPham = mongoose.model('DanhMucSanPham', new mongoose.Schema({
  TenDanhMuc: String,
  SoLuong: Number,
}));

const ChiTietDanhMuc = mongoose.model('ChiTietDanhMuc', new mongoose.Schema({
  MaDanhMuc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DanhMucSanPham',
  },
  MaSanPham: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SanPham',
  },
  NgayNhap: Date,
  GhiChu: String,
}));

const ChiTietGioHang = mongoose.model('ChiTietGioHang', new mongoose.Schema({
  MaGioHang: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GioHang',
  },
  MaSanPham: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SanPham',
  },
  SoLuongHang: Number,
}));

const ChiTietDonHang = mongoose.model('ChiTietDonHang', new mongoose.Schema({
  MaDonHang: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DonHang',
  },
  MaSanPham: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SanPham',
  },
  ThanhTien: Number,
  NgayLap: Date,
}));

const DanhSachQuanLy = mongoose.model('DanhSachQuanLy', new mongoose.Schema({
  MaNhanVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NhanVienQuanLy',
  },
  MaTaiKhoan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaiKhoan',
  },
  ThoiGian: Date,
}));

const PhuongThucThanhToan = mongoose.model('PhuongThucThanhToan', new mongoose.Schema({
  TenPhuongThuc: String,
  MoTa: String,
}));

// Tạo dữ liệu mẫu cho bảng PhuongThucThanhToan
/*PhuongThucThanhToan.create([
  {
    TenPhuongThuc: 'Thanh toán bằng thẻ tín dụng',
    MoTa: 'Phương thức thanh toán qua thẻ tín dụng',
  },
  {
    TenPhuongThuc: 'Thanh toán bằng chuyển khoản ngân hàng',
    MoTa: 'Phương thức thanh toán qua chuyển khoản ngân hàng',
  },
  {
    TenPhuongThuc: 'Thanh toán bằng khi nhận hàng',
    MoTa: 'Phương thức thanh toán trực tiếp khi nhận hàng',
  },
  {
    TenPhuongThuc: 'Thanh toán bằng ví điện tử',
    MoTa: 'Phương thức thanh toán ví điện tử',
  },
])
  .then(() => {
    console.log('Dữ liệu mẫu cho bảng PhuongThucThanhToan đã được tạo.');
  })
  .catch((error) => {
    console.error('Lỗi khi tạo dữ liệu mẫu cho bảng PhuongThucThanhToan:', error);
  });
})
.catch((error) => {
console.error('Lỗi kết nối đến MongoDB:', error);
});*/


app.post("/post", async (req, res) => {
  console.log("inside post function");

  const data_ThanhVien = new ThanhVien({
    HoTen: req.body.HoTen,
    GioiTinh: req.body.GioiTinh,
    NamSinh: req.body.NamSinh,
    SDT: req.body.SDT,
    Email: req.body.Email
  });
 
  try {
    const val = await data_ThanhVien.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_NhanVien = new NhanVienQuanLy({
    HoTen: req.body.HoTen,
    GioiTinh: req.body.GioiTinh,
    SDT: req.body.SDT,
    Email: req.body.Email
  });
 
  try {
    const val = await data_NhanVien.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_TaiKhoan = new TaiKhoan({
    TenTaiKhoan: req.body.TenTaiKhoan,
    MatKhau: req.body.MatKhau,
    MaThanhVien: req.body.MaThanhVien
  });
 
  try {
    const val = await data_TaiKhoan.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_GioHang = new GioHang({
    NgayThem: req.body.NgayThem,
    TinhTrangGio: req.body.TinhTrangGio,
    MaThanhVien: req.body.MaThanhVien
  });
 
  try {
    const val = await data_GioHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_DonHang = new DonHang({
    TinhTrangDon: req.body.TinhTrangDon,
    MaThanhVien: req.body.MaThanhVien,
    MaPhuongThuc: req.body.MaPhuongThuc
  });
 
  try {
    const val = await data_DonHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_SanPham = new SanPham({
    TenSanPham: req.body.TenSanPham,
    Gia: req.body.Gia,
    DonVi: req.body.DonVi,
    XuatSu: req.body.XuatSu
  });
 
  try {
    const val = await data_SanPham.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_BinhLuan = new BinhLuan({
    NoiDung: req.body.NoiDung,
    MaThanhVien: req.body.MaThanhVien,
    MaSanPham: req.body.MaSanPham
  });
 
  try {
    const val = await data_BinhLuan.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_DanhGia = new DanhGia({
    Diem: req.body.Diem,
    MaThanhVien: req.body.MaThanhVien,
    MaSanPham: req.body.MaSanPham
  });
 
  try {
    const val = await data_DanhGia.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_DanhMucSanPham = new DanhMucSanPham({
    TenDanhMuc: req.body.TenDanhMuc,
    SoLuong: req.body.SoLuong
  });
 
  try {
    const val = await data_DanhMucSanPham.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_ChiTietDanhMuc = new ChiTietDanhMuc({
    MaDanhMuc: req.body.MaDanhMuc,
    MaSanPham: req.body.MaSanPham,
    NgayNhap: req.body.NgayNhap,
    GhiChu: req.body.GhiChu
  });
 
  try {
    const val = await data_ChiTietDanhMuc.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_ChiTietGioHang = new ChiTietGioHang({
    MaGioHang: req.body.MaGioHang,
    MaSanPham: req.body.MaSanPham,
    SoLuongHang: req.body.SoLuongHang
  });
 
  try {
    const val = await data_ChiTietGioHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_ChiTietDonHang = new ChiTietDonHang({
    MaDonHang: req.body.MaDonHang,
    MaSanPham: req.body.MaSanPham,
    ThanhTien: req.body.ThanhTien,
    NgayLap: req.body.ThanhTien
  });
 
  try {
    const val = await data_ChiTietDonHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_DanhSachQuanLy = new DanhSachQuanLy({
    MaThanhVien: req.body.MaThanhVien,
    MaTaiKhoan: req.body.MaTaiKhoan,
    ThoiGian: req.body.ThoiGian
  });
 
  try {
    const val = await data_DanhSachQuanLy.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

  const data_PhuongThucThanhToan = new PhuongThucThanhToan({
    TenPhuongThuc: req.body.TenPhuongThuc,
    MoTa: req.body.MoTa
  });
 
  try {
    const val = await data_PhuongThucThanhToan.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }

});

const port = process.env.PORT || 3000; // Sử dụng cổng môi trường hoặc mặc định là 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
