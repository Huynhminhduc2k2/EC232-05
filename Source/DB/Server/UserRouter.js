// Register
app.post("/Register", async (req, res) => {
    const { TenTaiKhoan, MatKhau, HoTen, GioiTinh, NamSinh, SDT, Email } = req.body;

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    if (!TenTaiKhoan || !MatKhau || !HoTen || !SDT || !Email) {
        return res.status(400).json({ error: "Vui lòng cung cấp đủ thông tin đăng ký." });
    }

    // Kiểm tra xem tài khoản đã tồn tại hay chưa
    const existingAccount = await TaiKhoan.findOne({ TenTaiKhoan });
    if (existingAccount) {
        return res.status(400).json({ error: "Tên tài khoản đã tồn tại." });
    }

    try {
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

        res.status(201).json({ message: "Tài khoản đã được đăng ký thành công." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Đã có lỗi xảy ra khi đăng ký tài khoản." });
    }
});
  
// Login
router.post("/Login", async (req, res) => {
    const { TenTaiKhoan, MatKhau } = req.body;

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    if (!TenTaiKhoan || !MatKhau) {
        return res.status(400).json({ error: "Vui lòng cung cấp tên tài khoản và mật khẩu." });
    }

    try {
        // Tìm tài khoản dựa trên Tên Tài Khoản
        const taiKhoan = await TaiKhoan.findOne({ TenTaiKhoan });

        // Kiểm tra xem tài khoản tồn tại và so sánh mật khẩu
        if (!taiKhoan) {
            return res.status(401).json({ error: "Tài khoản hoặc mật khẩu không chính xác." });
        }

        // Sử dụng bcrypt để so sánh mật khẩu
        const passwordMatch = await bcrypt.compare(MatKhau, taiKhoan.MatKhau);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Tài khoản hoặc mật khẩu không chính xác." });
        }

        // Đăng nhập thành công, trả về thông tin tài khoản
        res.status(200).json({ message: "Đăng nhập thành công.", taiKhoan });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Đã có lỗi xảy ra khi đăng nhập." });
    }
});
