// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://admin:0335597676Huan@demo1.gky5n1m.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Tạo các mô hình cho các bảng MongoDB
//     const ThanhVien = mongoose.model('ThanhVien', new mongoose.Schema({
//       HoTen: String,
//       GioiTinh: String,
//       NamSinh: Date,
//       SDT: String,
//       Email: String,
//     }));

//     const NhanVienQuanLy = mongoose.model('NhanVienQuanLy', new mongoose.Schema({
//       HoTen: String,
//       GioiTinh: String,
//       SDT: String,
//       Email: String,
//     }));

//     const TaiKhoan = mongoose.model('TaiKhoan', new mongoose.Schema({
//       TenTaiKhoan: String,
//       MatKhau: String,
//       MaThanhVien: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ThanhVien',
//       },
//     }));

//     const GioHang = mongoose.model('GioHang', new mongoose.Schema({
//       NgayThem: Date,
//       TinhTrangGio: String,
//       MaThanhVien: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ThanhVien',
//       },
//     }));

//     const DonHang = mongoose.model('DonHang', new mongoose.Schema({
//       TinhTrangDon: String,
//       MaThanhVien: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ThanhVien',
//       },
//       MaPhuongThuc: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'PhuongThucThanhToan',
//       },
//     }));

//     const SanPham = mongoose.model('SanPham', new mongoose.Schema({
//       TenSanPham: String,
//       Gia: Number,
//       DonVi: String,
//       XuatSu: String,
//     }));

//     const BinhLuan = mongoose.model('BinhLuan', new mongoose.Schema({
//       NoiDung: String,
//       MaThanhVien: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ThanhVien',
//       },
//       MaSanPham: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SanPham',
//       },
//     }));

//     const DanhGia = mongoose.model('DanhGia', new mongoose.Schema({
//       Diem: Number,
//       MaThanhVien: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ThanhVien',
//       },
//       MaSanPham: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SanPham',
//       },
//     }));

//     const DanhMucSanPham = mongoose.model('DanhMucSanPham', new mongoose.Schema({
//       TenDanhMuc: String,
//       SoLuong: Number,
//     }));

//     const ChiTietDanhMuc = mongoose.model('ChiTietDanhMuc', new mongoose.Schema({
//       MaDanhMuc: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'DanhMucSanPham',
//       },
//       MaSanPham: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SanPham',
//       },
//       NgayNhap: Date,
//       GhiChu: String,
//     }));

//     const ChiTietGioHang = mongoose.model('ChiTietGioHang', new mongoose.Schema({
//       MaGioHang: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'GioHang',
//       },
//       MaSanPham: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SanPham',
//       },
//       SoLuongHang: Number,
//     }));

//     const ChiTietDonHang = mongoose.model('ChiTietDonHang', new mongoose.Schema({
//       MaDonHang: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'DonHang',
//       },
//       MaSanPham: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SanPham',
//       },
//       ThanhTien: Number,
//       NgayLap: Date,
//     }));

//     const DanhSachQuanLy = mongoose.model('DanhSachQuanLy', new mongoose.Schema({
//       MaNhanVien: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'NhanVienQuanLy',
//       },
//       MaTaiKhoan: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'TaiKhoan',
//       },
//       ThoiGian: Date,
//     }));

//     const PhuongThucThanhToan = mongoose.model('PhuongThucThanhToan', new mongoose.Schema({
//       TenPhuongThuc: String,
//       MoTa: String,
//     }));

//     // Tạo dữ liệu mẫu cho bảng PhuongThucThanhToan
//     PhuongThucThanhToan.create([
//       {
//         TenPhuongThuc: 'Thanh toán bằng thẻ tín dụng',
//         MoTa: 'Phương thức thanh toán qua thẻ tín dụng',
//       },
//       {
//         TenPhuongThuc: 'Thanh toán bằng chuyển khoản ngân hàng',
//         MoTa: 'Phương thức thanh toán qua chuyển khoản ngân hàng',
//       },
//       {
//         TenPhuongThuc: 'Thanh toán bằng khi nhận hàng',
//         MoTa: 'Phương thức thanh toán trực tiếp khi nhận hàng',
//       },
//       {
//         TenPhuongThuc: 'Thanh toán bằng ví điện tử',
//         MoTa: 'Phương thức thanh toán ví điện tử',
//       },
//     ])
//       .then(() => {
//         console.log('Dữ liệu mẫu cho bảng PhuongThucThanhToan đã được tạo.');
//       })
//       .catch((error) => {
//         console.error('Lỗi khi tạo dữ liệu mẫu cho bảng PhuongThucThanhToan:', error);
//       });
//   })
//   .catch((error) => {
//     console.error('Lỗi kết nối đến MongoDB:', error);
//   });
