import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; // Thêm body-parser để xử lý dữ liệu gửi lên
import bcrypt from 'bcrypt';
import cors from 'cors'; // Nhập middleware cors

dotenv.config();

const uri = process.env.MONGODB_URI; // Thay thế URI kết nối MongoDB bằng biến môi trường

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}
connect();

const app = express();

app.use(cors()); // Sử dụng middleware cors để cho phép các yêu cầu từ nguồn khác

app.use(bodyParser.json()); // Sử dụng body-parser để xử lý JSON data

app.get('/', (req, res) => {
  // Xử lý tuyến đường GET "/"
  res.send('Hello, World!');
});
// Định nghĩa cái ThanhVien
const ThanhVien = mongoose.model(
  'ThanhVien',
  new mongoose.Schema({
    HoTen: String,
    GioiTinh: String,
    NamSinh: String,
    SDT: String,
    Email: String,
  })
);

const NhanVienQuanLy = mongoose.model(
  'NhanVienQuanLy',
  new mongoose.Schema({
    HoTen: String,
    GioiTinh: String,
    SDT: String,
    Email: String,
  })
);

const TaiKhoan = mongoose.model(
  'TaiKhoan',
  new mongoose.Schema({
    TenTaiKhoan: String,
    MatKhau: String,
    MaThanhVien: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ThanhVien',
    },
  })
);

const GioHang = mongoose.model(
  'GioHang',
  new mongoose.Schema({
    NgayThem: Date,
    TinhTrangGio: String,
    MaThanhVien: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ThanhVien',
    },
  })
);

const DonHang = mongoose.model(
  'DonHang',
  new mongoose.Schema({
    TinhTrangDon: String,
    MaThanhVien: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ThanhVien',
    },
    MaPhuongThuc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PhuongThucThanhToan',
    },
  })
);

const SanPham = mongoose.model(
  'SanPham',
  new mongoose.Schema({
    TenSanPham: String,
    Gia: Number,
    SoLuong: Number,
    XuatSu: String,
  })
);

const BinhLuan = mongoose.model(
  'BinhLuan',
  new mongoose.Schema({
    NoiDung: String,
    MaThanhVien: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ThanhVien',
    },
    MaSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SanPham',
    },
  })
);

const DanhGia = mongoose.model(
  'DanhGia',
  new mongoose.Schema({
    Diem: Number,
    MaThanhVien: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ThanhVien',
    },
    MaSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SanPham',
    },
  })
);

const DanhMucSanPham = mongoose.model(
  'DanhMucSanPham',
  new mongoose.Schema({
    TenDanhMuc: String,
    SoLuong: Number,
  })
);

const ChiTietDanhMuc = mongoose.model(
  'ChiTietDanhMuc',
  new mongoose.Schema({
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
  })
);

const ChiTietGioHang = mongoose.model(
  'ChiTietGioHang',
  new mongoose.Schema({
    MaGioHang: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GioHang',
    },
    MaSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SanPham',
    },
    SoLuongHang: Number,
  })
);

const ChiTietDonHang = mongoose.model(
  'ChiTietDonHang',
  new mongoose.Schema({
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
  })
);

const DanhSachQuanLy = mongoose.model(
  'DanhSachQuanLy',
  new mongoose.Schema({
    MaNhanVien: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NhanVienQuanLy',
    },
    MaTaiKhoan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TaiKhoan',
    },
    ThoiGian: Date,
  })
);

const PhuongThucThanhToan = mongoose.model(
  'PhuongThucThanhToan',
  new mongoose.Schema({
    TenPhuongThuc: String,
    MoTa: String,
  })
);

app.post('/taikhoan', async (req, res) => {
  console.log('inside post function');

  const data_TaiKhoan = new TaiKhoan({
    TenTaiKhoan: req.body.TenTaiKhoan,
    MatKhau: req.body.MatKhau,
    MaThanhVien: req.body.MaThanhVien,
  });

  try {
    const val = await data_TaiKhoan.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/NhanVienQuanLy', async (req, res) => {
  console.log('inside post function');
  const data_NhanVien = new NhanVienQuanLy({
    HoTen: req.body.HoTen,
    GioiTinh: req.body.GioiTinh,
    SDT: req.body.SDT,
    Email: req.body.Email,
  });

  try {
    const val = await data_NhanVien.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/GioHang', async (req, res) => {
  console.log('inside post function');
  const data_GioHang = new GioHang({
    NgayThem: req.body.NgayThem,
    TinhTrangGio: req.body.TinhTrangGio,
    MaThanhVien: req.body.MaThanhVien,
  });

  try {
    const val = await data_GioHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/DonHang', async (req, res) => {
  console.log('inside post function');
  const data_DonHang = new DonHang({
    TinhTrangDon: req.body.TinhTrangDon,
    MaThanhVien: req.body.MaThanhVien,
    MaPhuongThuc: req.body.MaPhuongThuc,
  });

  try {
    const val = await data_DonHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/SanPham', async (req, res) => {
  console.log('inside post function');
  const data_SanPham = new SanPham({
    TenSanPham: req.body.TenSanPham,
    Gia: req.body.Gia,
    SoLuong: req.body.SoLuong,
    XuatSu: req.body.XuatSu,
  });

  try {
    const val = await data_SanPham.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/BinhLuan', async (req, res) => {
  console.log('inside post function');
  const data_BinhLuan = new BinhLuan({
    NoiDung: req.body.NoiDung,
    MaThanhVien: req.body.MaThanhVien,
    MaSanPham: req.body.MaSanPham,
  });

  try {
    const val = await data_BinhLuan.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/DanhGia', async (req, res) => {
  console.log('inside post function');
  const data_DanhGia = new DanhGia({
    Diem: req.body.Diem,
    MaThanhVien: req.body.MaThanhVien,
    MaSanPham: req.body.MaSanPham,
  });

  try {
    const val = await data_DanhGia.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/DanhMucSanPham', async (req, res) => {
  console.log('inside post function');
  const data_DanhMucSanPham = new DanhMucSanPham({
    TenDanhMuc: req.body.TenDanhMuc,
    SoLuong: req.body.SoLuong,
  });

  try {
    const val = await data_DanhMucSanPham.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/ChiTietDanhMuc', async (req, res) => {
  console.log('inside post function');
  const data_ChiTietDanhMuc = new ChiTietDanhMuc({
    MaDanhMuc: req.body.MaDanhMuc,
    MaSanPham: req.body.MaSanPham,
    NgayNhap: req.body.NgayNhap,
    GhiChu: req.body.GhiChu,
  });

  try {
    const val = await data_ChiTietDanhMuc.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/ChiTietGioHang', async (req, res) => {
  console.log('inside post function');
  const data_ChiTietGioHang = new ChiTietGioHang({
    MaGioHang: req.body.MaGioHang,
    MaSanPham: req.body.MaSanPham,
    SoLuongHang: req.body.SoLuongHang,
  });

  try {
    const val = await data_ChiTietGioHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/ChiTietDonHang', async (req, res) => {
  console.log('inside post function');
  const data_ChiTietDonHang = new ChiTietDonHang({
    MaDonHang: req.body.MaDonHang,
    MaSanPham: req.body.MaSanPham,
    ThanhTien: req.body.ThanhTien,
    NgayLap: req.body.ThanhTien,
  });

  try {
    const val = await data_ChiTietDonHang.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/DanhSachQuanLy', async (req, res) => {
  console.log('inside post function');
  const data_DanhSachQuanLy = new DanhSachQuanLy({
    MaThanhVien: req.body.MaThanhVien,
    MaTaiKhoan: req.body.MaTaiKhoan,
    ThoiGian: req.body.ThoiGian,
  });

  try {
    const val = await data_DanhSachQuanLy.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/PhuongThucThanhToan', async (req, res) => {
  console.log('inside post function');
  const data_PhuongThucThanhToan = new PhuongThucThanhToan({
    TenPhuongThuc: req.body.TenPhuongThuc,
    MoTa: req.body.MoTa,
  });

  try {
    const val = await data_PhuongThucThanhToan.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

app.post('/ThanhVien', async (req, res) => {
  console.log('inside post function');

  const data_ThanhVien = new ThanhVien({
    HoTen: req.body.HoTen,
    GioiTinh: req.body.GioiTinh,
    NamSinh: req.body.NamSinh,
    SDT: req.body.SDT,
    Email: req.body.Email,
  });

  try {
    const val = await data_ThanhVien.save();
    res.json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lưu dữ liệu.' });
  }
});

const port = process.env.PORT;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lấy dữ liệu của tất cả sản phẩm
app.get('/api/products', async (req, res) => {
  try {
    // Lấy tất cả sản phẩm từ cơ sở dữ liệu
    const products = await SanPham.find();

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã có lỗi xảy ra khi lấy dữ liệu sản phẩm.' });
  }
});


// Register
app.post('/api/register', async (req, res) => {
  const { TenTaiKhoan, MatKhau, HoTen, GioiTinh, NamSinh, SDT, Email } =
    req.body;

  // Kiểm tra tính hợp lệ của dữ liệu đầu vào
  if (!TenTaiKhoan || !MatKhau || !HoTen || !SDT || !Email) {
    return res
      .status(400)
      .json({ error: 'Vui lòng cung cấp đủ thông tin đăng ký.' });
  }

  try {
    // Kiểm tra xem tài khoản đã tồn tại hay chưa
    const existingAccount = await TaiKhoan.findOne({ TenTaiKhoan });
    if (existingAccount) {
      return res.status(400).json({ error: 'Tên tài khoản đã tồn tại.' });
    }

    // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    const hashedPassword = await bcrypt.hash(MatKhau, 10);

    // Tạo một thành viên mới
    const thanhVien = new ThanhVien({
      HoTen,
      GioiTinh,
      NamSinh,
      SDT,
      Email,
    });

    // Lưu thông tin thành viên
    await thanhVien.save();

    // Tạo tài khoản và liên kết với thành viên
    const taiKhoan = new TaiKhoan({
      TenTaiKhoan,
      MatKhau: hashedPassword,
      MaThanhVien: thanhVien._id,
    });

    // Lưu thông tin tài khoản
    await taiKhoan.save();

    res.status(201).json({ message: 'Tài khoản đã được đăng ký thành công.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã có lỗi xảy ra khi đăng ký tài khoản.' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { TenTaiKhoan, MatKhau } = req.body;

  // Kiểm tra tính hợp lệ của dữ liệu đầu vào
  if (!TenTaiKhoan || !MatKhau) {
    return res
      .status(400)
      .json({ error: 'Vui lòng cung cấp tên tài khoản và mật khẩu.' });
  }

  try {
    // Tìm tài khoản dựa trên Tên Tài Khoản
    const taiKhoan = await TaiKhoan.findOne({ TenTaiKhoan });

    // Kiểm tra xem tài khoản tồn tại và so sánh mật khẩu
    if (!taiKhoan) {
      return res
        .status(401)
        .json({ error: 'Tài khoản hoặc mật khẩu không chính xác.' });
    }

    // Sử dụng bcrypt để so sánh mật khẩu
    const passwordMatch = await bcrypt.compare(MatKhau, taiKhoan.MatKhau);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: 'Tài khoản hoặc mật khẩu không chính xác.' });
    }

    // Đăng nhập thành công, trả về thông tin tài khoản
    res.status(200).json({ message: 'Đăng nhập thành công.', taiKhoan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã có lỗi xảy ra khi đăng nhập.' });
  }
});

// Thêm sản phẩm vào giỏ hàng dựa vào tên sản phẩm
app.post('/api/cart/add', async (req, res) => {
  const userId = req.body.userId;
  const productName = req.body.productName;
  const quantity = req.body.quantity;

  // Tìm giỏ hàng của người dùng
  let gioHang = await GioHang.findOne({ MaThanhVien: userId });

  if (!gioHang) {
    // Nếu giỏ hàng không tồn tại thì tạo một giỏ hàng mới
    gioHang = new GioHang({
      MaThanhVien: userId,
      items: [],
    });
  }

  // Kiểm tra xem sản phẩm có tồn tại không dựa vào tên sản phẩm
  const product = await SanPham.findOne({ TenSanPham: productName });

  if (!product) {
    return res.status(404).json({ error: 'Sản phẩm không tồn tại.' });
  }

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const itemIndex = gioHang.items.findIndex(
    (item) => item.MaSanPham.toString() === product._id.toString()
  );

  if (itemIndex !== -1) {
    // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
    gioHang.items[itemIndex].SoLuong += quantity;
  } else {
    // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới vào
    gioHang.items.push({ MaSanPham: product._id, SoLuong: quantity });
  }

  // Tạo một chi tiết giỏ hàng mới
  const chiTietGioHang = new ChiTietGioHang({
    MaGioHang: gioHang._id,
    MaSanPham: product._id,
    SoLuongHang: quantity
  });

  // Lưu chi tiết giỏ hàng
  await chiTietGioHang.save();

  // Lưu giỏ hàng
  await gioHang.save();

  res.json(gioHang);
});



// Xóa sản phẩm khỏi giỏ hàng
app.post('/api/cart/remove', async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;

  try {
    // Tìm giỏ hàng của người dùng
    const gioHang = await GioHang.findOne({ MaThanhVien: userId });

    if (!gioHang) {
      return res.status(404).json({ error: 'Giỏ hàng không tồn tại.' });
    }

    // Kiểm tra xem sản phẩm có tồn tại trong giỏ hàng không
    const itemIndex = gioHang.items.findIndex(
      (item) => item.MaSanPham.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ error: 'Sản phẩm không tồn tại trong giỏ hàng.' });
    }

    // Xóa sản phẩm khỏi giỏ hàng
    gioHang.items.splice(itemIndex, 1);

    // Lưu giỏ hàng sau khi xóa sản phẩm
    await gioHang.save();

    res.json(gioHang);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng.' });
  }
});
// search theo tên 
app.post('/api/search', async (req, res) => {
  const tuKhoa = req.body.tuKhoa; // Nhận từ khóa tìm kiếm từ request body

  try {
    const ketQua = await SanPham.find({ TenSanPham: { $regex: new RegExp(tuKhoa, 'i') } });
    res.json(ketQua);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi tìm kiếm sản phẩm.' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
