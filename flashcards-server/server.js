const express = require('express');
const app = express();
const port = 8000;

// Dữ liệu từ điển
const dict = {
  "pretty": "xinh đẹp",
  "car": "xe hơi",
  "study": "học tập",
  "life": "cuộc sống",
  "enormous": "to lớn",
  "computer": "máy tính"
};

const words = Object.keys(dict);
const meanings = Object.values(dict);

// Cấu hình CORS để React (cổng 5173) có thể gọi API (cổng 8000)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint trả về tổng số từ
app.get('/wordcount', (req, res) => {
  res.json({ "wordcount": words.length });
});

// Endpoint trả về từ theo index
app.get('/getword/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < words.length) {
    res.json({
      "index": index,
      "word": words[index],
      "def": meanings[index]
    });
  } else {
    res.status(404).json({ error: "Index không tồn tại" });
  }
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});