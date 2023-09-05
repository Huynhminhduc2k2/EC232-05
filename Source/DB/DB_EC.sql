CREATE DATABASE demo_EC;

USE demo_EC;

CREATE TABLE ThanhVien (
  MaThanhVien INT PRIMARY KEY AUTO_INCREMENT,
  HoTen VARCHAR(255),
  GioiTinh VARCHAR(10),
  NamSinh DATE,
  SDT VARCHAR(20),
  Email VARCHAR(255)
);

CREATE TABLE NhanVienQuanLy (
  MaNhanVien INT PRIMARY KEY AUTO_INCREMENT,
  HoTen VARCHAR(255),
  GioiTinh VARCHAR(10),
  SDT VARCHAR(20),
  Email VARCHAR(255)
);

CREATE TABLE TaiKhoan (
  MaTaiKhoan INT PRIMARY KEY AUTO_INCREMENT,
  TenTaiKhoan VARCHAR(255),
  MatKhau VARCHAR(255),
  MaThanhVien INT,
  FOREIGN KEY (MaThanhVien) REFERENCES ThanhVien(MaThanhVien)
);

CREATE TABLE GioHang (
  MaGioHang INT PRIMARY KEY AUTO_INCREMENT,
  NgayThem DATE,
  TinhTrangGio VARCHAR(255),
  MaThanhVien INT,
  FOREIGN KEY (MaThanhVien) REFERENCES ThanhVien(MaThanhVien)
);

CREATE TABLE DonHang (
  MaDon INT PRIMARY KEY AUTO_INCREMENT,
  TinhTrangDon VARCHAR(255),
  MaThanhVien INT,
  MaPhuongThuc INT, -- Thêm trường MaPhuongThuc để lưu thông tin phương thức thanh toán
  FOREIGN KEY (MaThanhVien) REFERENCES ThanhVien(MaThanhVien),
  FOREIGN KEY (MaPhuongThuc) REFERENCES PhuongThucThanhToan(MaPhuongThuc) -- Liên kết với bảng PhuongThucThanhToan
);

CREATE TABLE SanPham (
  MaSanPham INT PRIMARY KEY AUTO_INCREMENT,
  TenSanPham VARCHAR(255),
  Gia DECIMAL(10,2),
  DonVi VARCHAR(50),
  XuatSu VARCHAR(255)
);

CREATE TABLE BinhLuan (
  MaBinhLuan INT PRIMARY KEY AUTO_INCREMENT,
  NoiDung TEXT,
  MaThanhVien INT,
  MaSanPham INT,
  FOREIGN KEY (MaThanhVien) REFERENCES ThanhVien(MaThanhVien),
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);

CREATE TABLE DanhGia (
  MaDanhGia INT PRIMARY KEY AUTO_INCREMENT,
  Diem INT,
  MaThanhVien INT,
  MaSanPham INT,
  FOREIGN KEY (MaThanhVien) REFERENCES ThanhVien(MaThanhVien),
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);

CREATE TABLE DanhMucSanPham (
  MaDanhMuc INT PRIMARY KEY AUTO_INCREMENT,
  TenDanhMuc VARCHAR(255),
  SoLuong INT
);

CREATE TABLE ChiTietDanhMuc (
  MaDanhMuc INT,
  MaSanPham INT,
  NgayNhap DATE,
  GhiChu VARCHAR(255),
  PRIMARY KEY (MaDanhMuc, MaSanPham),
  FOREIGN KEY (MaDanhMuc) REFERENCES DanhMucSanPham(MaDanhMuc),
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);

CREATE TABLE ChiTietGioHang (
  MaGioHang INT,
  MaSanPham INT,
  SoLuongHang INT,
  PRIMARY KEY (MaGioHang, MaSanPham),
  FOREIGN KEY (MaGioHang) REFERENCES GioHang(MaGioHang),
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);

CREATE TABLE ChiTietDonHang (
  MaDonHang INT,
  MaSanPham INT,
  ThanhTien DECIMAL(10,2),
  NgayLap DATE,
  PRIMARY KEY (MaDonHang, MaSanPham),
  FOREIGN KEY (MaDonHang) REFERENCES DonHang(MaDon),
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);

CREATE TABLE DanhSachQuanLy (
  MaNhanVien INT,
  MaTaiKhoan INT,
  ThoiGian DATETIME,
  PRIMARY KEY (MaNhanVien, MaTaiKhoan),
  FOREIGN KEY (MaNhanVien) REFERENCES NhanVienQuanLy(MaNhanVien),
  FOREIGN KEY (MaTaiKhoan) REFERENCES TaiKhoan(MaTaiKhoan)
);

CREATE TABLE PhuongThucThanhToan (
  MaPhuongThuc INT PRIMARY KEY AUTO_INCREMENT,
  TenPhuongThuc VARCHAR(255),
  MoTa TEXT
);