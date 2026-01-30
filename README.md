# 🚀 ABC Digital - NestJS Backend Template

Bộ Template mẫu chuẩn dành cho các dự án Backend tại ABC Digital. Dự án được xây dựng trên NestJS v10+, MikroORM (PostgreSQL) và quy chuẩn quản lý mã nguồn chuyên nghiệp.

## 🌟 Tính năng nổi bật

- **100% TypeScript**: Đảm bảo an toàn kiểu dữ liệu cho toàn bộ hệ thống.
- **MikroORM & PostgreSQL**: Quản lý Database chuyên nghiệp với Migrations và Seeding.
- **Authentication**: Sẵn sàng tích hợp Firebase hoặc Auth tùy chỉnh (Access/Refresh Tokens).
- **Standard Tooling**: Cấu hình sẵn Husky, ESLint, Prettier và .nvmrc (Node v20).
- **API Documentation**: Swagger UI tự động tích hợp tại `/documentation`.

---

## 📁 Cấu trúc thư mục (Folder Structure)

Dưới đây là sơ đồ tổ chức thư mục của dự án:

```text
├── .github           # Cấu hình GitHub (Workflows, CI/CD)
├── .husky            # Git Hooks (Tự động kiểm tra code trước khi commit)
├── .vscode           # Cấu hình VS Code dùng chung cho Team
├── __mocks__         # Chứa dữ liệu giả phục vụ testing
├── docs              # Tài liệu dự án (ERD, sơ đồ nghiệp vụ)
├── envs              # Chứa các file biến môi trường mẫu
├── src               # Mã nguồn chính của dự án
│   ├── common        # Các class dùng chung (Constants, Decorators, Utils)
│   ├── configs       # Cấu hình các modules (Database, JWT)
│   ├── database      # Quản lý Migrations, Seeders và Factories
│   └── modules       # Logic nghiệp vụ tổ chức theo tính năng
├── test              # Các ca kiểm thử đầu cuối (E2E testing)
├── types             # Định nghĩa kiểu dữ liệu TypeScript toàn cục
├── .nvmrc            # Quy định phiên bản Node.js (v20)
├── start.sh          # Script khởi chạy nhanh dự án
└── mikro-orm.config.ts # File cấu hình lõi của MikroORM
🛠 Hướng dẫn cài đặt và khởi chạy1. Chuẩn bị môi trườngNode.js: Phiên bản 20.x.Package Manager: pnpm (npm install -g pnpm).2. Cài đặt ban đầuMở terminal tại thư mục dự án và thực hiện:Bash# Cài đặt thư viện
pnpm install

# Tạo file môi trường từ mẫu (Dành cho Windows)
copy .env.template .env
3. Thiết lập Database & ServicesBash# Khởi động Docker (Postgres, Redis, Minio)
pnpm docker:up

# Chạy Migration và khởi tạo dữ liệu mẫu
pnpm data:init
4. Khởi chạy Hello WorldBash# Chế độ phát triển
pnpm run start:dev
Truy cập http://localhost:3500 để xem kết quả khởi tạo.⚠️ Lưu ý về các file tự sinh (Generated Files)Các thư mục/file sau sẽ tự động sinh ra trong quá trình làm việc. Bạn không nên chỉnh sửa trực tiếp hoặc đẩy chúng lên Git:node_modules/: Thư viện cài đặt.dist/: Mã nguồn đã biên dịch sang JavaScript..env: File cấu hình môi trường thực tế (chứa thông tin bảo mật).coverage/ hoặc unit-results/: Báo cáo kết quả kiểm thử.pnpm-lock.yaml: Bản ghi phiên bản chi tiết của các thư viện.📜 Các lệnh CLI quan trọngLệnhMô tảpnpm migration:upCập nhật Database lên phiên bản mới nhấtpnpm seed:runĐổ dữ liệu mẫu vào Databasepnpm lintKiểm tra và tự động sửa lỗi format codepnpm testChạy Unit Test./start.shChạy nhanh Migration và khởi động App📄 Tài liệu tham khảoNestJS DocumentationMikroORM Documentation© 2026 ABC Digital Team.