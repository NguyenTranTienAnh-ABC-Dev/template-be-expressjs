# 🚀 ABC Digital - ExpressJS Backend Template (Modular Style)

Bộ Template ExpressJS chuyên nghiệp được chuẩn hóa theo kiến trúc của **NestJS**, dành riêng cho các dự án tại ABC Digital. Template này tập trung vào tính mô-đun, dễ mở rộng và tích hợp sẵn quy trình Docker.

---

## 🌟 Tính năng nổi bật

- **Nest-Style Architecture**: Tổ chức thư mục theo Modules, tách biệt Controller và Service.
- **ES Modules (ESM)**: Sử dụng cú pháp `import/export` hiện đại.
- **Standard Tooling**: Tích hợp sẵn ESLint, Prettier và Husky để đảm bảo chất lượng code.
- **Docker Ready**: Cấu hình sẵn Docker-compose cho Postgres và Redis.
- **Environment Setup**: Tự động hóa việc khởi tạo file `.env` qua bộ CLI.

---

## 📁 Cấu trúc thư mục (Folder Structure)

```text
├── .husky            # Git Hooks (Tự động check code/format)
├── src               # Mã nguồn chính của dự án
│   ├── common        # Middlewares dùng chung (Auth, Logger, ErrorHandler)
│   ├── configs       # Cấu hình Database, App và Biến môi trường
│   ├── modules       # Chứa các Module nghiệp vụ (Ví dụ: user, auth)
│   │   └── user      # Module mẫu (Controller, Service, Routes)
│   └── main.js       # Entry point - Khởi tạo server
├── .env.template     # File khai báo biến môi trường mẫu
└── package.json      # Quản lý thư viện và kịch bản khởi chạy