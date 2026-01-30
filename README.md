Flashcards Full-stack Application (Updated)

Dự án này là kết quả của Tutorial 12, nâng cấp từ Activity 1 của Tutorial 11 bằng cách chuyển toàn bộ logic dữ liệu sang Backend.
🏗 Project Structure

Cấu trúc thư mục được tổ chức để tách biệt Front-end và Back-end:

    flashcards-server/: Chứa Node.js backend xử lý API.

    flashcards-client/: Chứa React frontend hiển thị giao diện người dùng.

🚀 How to Run

    Backend: Truy cập flashcards-server và chạy node server.js. Server sẽ lắng nghe tại cổng 8000.

    Frontend: Truy cập flashcards và chạy npm run dev.

📊 Results & API Endpoints

Sau khi chạy, ứng dụng đạt được các kết quả sau:
1. Backend Endpoints (Tested)

Hệ thống cung cấp 2 cổng dữ liệu chuẩn JSON:

    Word Count: http://localhost:8000/wordcount trả về {"wordcount": 6}.

    Get Word: http://localhost:8000/getword/:index trả về thông tin chi tiết của một từ dựa trên chỉ số.

2. Frontend Integration

    Data Fetching: Sử dụng hàm fetch trong vòng đời componentDidMount để đồng bộ dữ liệu với server ngay khi ứng dụng khởi chạy.

    CORS Handling: Đã thiết lập Header Access-Control-Allow-Origin: * tại server để cho phép trình duyệt truy xuất dữ liệu từ client.

    State Management: Quản lý trạng thái từ vựng và chỉ số hiện tại thông qua React State, đảm bảo UI cập nhật mượt mà khi người dùng điều hướng.

📸 Preview

    Giao diện: Hiển thị thẻ bài màu xanh cho từ vựng và thẻ trắng cho định nghĩa.

    Điều hướng: Nút mũi tên cho phép chuyển đổi giữa các từ, đồng thời cập nhật trạng thái 1 / 6, 2 / 6 dựa trên dữ liệu thực tế từ server.
