const express = require('express');
const app = express();
const port = 8000;

const dict = {
  "pretty": "xinh đẹp",
  "car": "xe hơi",
  "study": "học tập",
  "life": "cuộc sống",
  "enormous": "to lớn",
  "computer": "máy tính"
}; // [cite: 649, 656]

const words = Object.keys(dict);
const meanings = Object.values(dict);

// QUAN TRỌNG: Cần thiết lập CORS để Client gọi được API [cite: 672, 673]
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint trả về tổng số từ [cite: 658, 659]
app.get('/wordcount', (req, res) => {
  res.json({ "wordcount": words.length }); // [cite: 661]
});

// Endpoint trả về từ theo index [cite: 662, 663]
app.get('/getword/:index', (req, res) => {
  const index = parseInt(req.params.index);
  res.json({
    "index": index,
    "word": words[index],
    "def": meanings[index]
  }); // [cite: 666, 670]
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});