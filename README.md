Flashcards Full-stack Application (Updated)

Dự án này là kết quả của Tutorial 12, nâng cấp từ Activity 1 của Tutorial 11 bằng cách chuyển toàn bộ logic dữ liệu sang Backend.
🏗 Project Structure

Cấu trúc thư mục được tổ chức để tách biệt Front-end và Back-end:

    flashcards-server/: Chứa Node.js backend xử lý API.

    flashcards-client/: Chứa React frontend hiển thị giao diện người dùng.

🚀 How to Run

    Backend: Truy cập flashcards-server và chạy node server.js. Server sẽ lắng nghe tại cổng 8000.

    Frontend: Truy cập flashcards và chạy npm run dev.

🔗 Live Deployment Links

Dự án đã được triển khai trực tuyến tại các địa chỉ sau:

    Frontend (Giao diện React): flashcards-fullstack-r3eu-git-main-huenguyenkims-projects.vercel.app

        Được host trên Vercel, kết nối trực tiếp với API Backend để lấy dữ liệu.

    Backend API (Server Node.js): [https://your-backend-link.onrender.com]
        Được host trên Render, cung cấp các endpoint JSON cho ứng dụng.

📊 Results & API Endpoints

Sau khi chạy hoặc truy cập link deploy, bạn có thể kiểm tra các kết quả sau:
1. Backend Endpoints (Tested)

Hệ thống cung cấp dữ liệu chuẩn JSON qua các đường dẫn:

    Word Count: https://your-backend-link.onrender.com/wordcount trả về {"wordcount": 6}.

    Get Word: https://your-backend-link.onrender.com/getword/0 trả về chi tiết từ vựng:
    JSON

    {
      "index": 0,
      "word": "pretty",
      "def": "xinh đẹp"
    }

2. Frontend Integration

    Data Fetching: Sử dụng fetch trong componentDidMount để lấy số lượng từ và nội dung từ đầu tiên từ Backend ngay khi tải trang.

    CORS Handling: Đã cấu hình Header Access-Control-Allow-Origin: * tại server Express để cho phép Frontend gọi dữ liệu thành công.

    State Management: Trạng thái current được quản lý trong Class Component App, đảm bảo UI tự động render lại khi dữ liệu từ API trả về.

📸 Preview

    Giao diện: Thẻ xanh hiển thị từ vựng (word), thẻ trắng hiển thị định nghĩa (definition).

    Điều hướng: Nút mũi tên kích hoạt phương thức nextWord, tăng chỉ số current trong state và gọi API để lấy từ tiếp theo


