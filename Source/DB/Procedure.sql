USE demo_EC;
-- Register
DELIMITER $$

CREATE PROCEDURE RegisterAccount(
  IN p_TenTaiKhoan VARCHAR(255),
  IN p_MatKhau VARCHAR(255),
  IN p_HoTen VARCHAR(255),
  IN p_GioiTinh VARCHAR(10),
  IN p_NamSinh DATE,
  IN p_SDT VARCHAR(20),
  IN p_Email VARCHAR(255)
)
BEGIN
  DECLARE v_Exists INT;

  -- Kiểm tra xem tài khoản với tên người dùng đã cho đã tồn tại hay chưa
  SELECT COUNT(*) INTO v_Exists FROM TaiKhoan WHERE TenTaiKhoan = p_TenTaiKhoan;

  IF v_Exists = 0 THEN
    -- Thêm tài khoản mới vào bảng ThanhVien
    INSERT INTO ThanhVien (HoTen, GioiTinh, NamSinh, SDT, Email)
    VALUES (p_HoTen, p_GioiTinh, p_NamSinh, p_SDT, p_Email);

    -- Lấy ID được tạo tự động cho bản ghi mới trong bảng ThanhVien
    SET @MaThanhVien = LAST_INSERT_ID();

    -- Thêm tài khoản mới vào bảng TaiKhoan
    INSERT INTO TaiKhoan (TenTaiKhoan, MatKhau, MaThanhVien)
    VALUES (p_TenTaiKhoan, p_MatKhau, @MaThanhVien);

    SELECT 'Đăng ký tài khoản thành công' AS Message;
  ELSE
    SELECT 'Tên tài khoản đã tồn tại' AS Message;
  END IF;
END$$

DELIMITER ;
----------------------

-- Login
DELIMITER $$

CREATE PROCEDURE Login(
  IN p_TenTaiKhoan VARCHAR(255),
  IN p_MatKhau VARCHAR(255)
)
BEGIN
  DECLARE v_MaTaiKhoan INT;
  
  -- Tìm tài khoản dựa trên tên người dùng và mật khẩu đã cho
  SELECT MaTaiKhoan INTO v_MaTaiKhoan FROM TaiKhoan WHERE TenTaiKhoan = p_TenTaiKhoan AND MatKhau = p_MatKhau;
  
  IF v_MaTaiKhoan IS NOT NULL THEN
    SELECT 'Đăng nhập thành công' AS Message;
  ELSE
    SELECT 'Tên đăng nhập hoặc mật khẩu không hợp lệ' AS Message;
  END IF;
END$$

DELIMITER ;

