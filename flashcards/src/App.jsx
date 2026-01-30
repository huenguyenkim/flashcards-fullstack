import React from 'react';
import './App.css';
import Flashcard from './Flashcard';
import Controls from './Controls';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Khởi tạo state trống, dữ liệu sẽ được lấy từ server sau
    this.state = {
      currentIdx: 0,
      wordcount: 0,
      currentWord: { word: "Loading...", def: "Đang tải..." }
    };
  }

  // 1. Khi component vừa hiển thị, gọi API để lấy dữ liệu ban đầu
  componentDidMount() {
    this.fetchWordCount();
    this.fetchWordData(0); // Lấy từ đầu tiên (index 0)
  }

  // 2. Hàm lấy tổng số lượng từ từ server
  fetchWordCount = () => {
    fetch('http://localhost:8000/wordcount')
      .then(res => res.json())
      .then(data => {
        this.setState({ wordcount: data.wordcount });
      })
      .catch(err => console.error("Lỗi lấy tổng số từ:", err));
  };

  // 3. Hàm lấy chi tiết một từ dựa trên index
  fetchWordData = (index) => {
    fetch(`http://localhost:8000/getword/${index}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          currentWord: { word: data.word, def: data.def },
          currentIdx: data.index 
        });
      })
      .catch(err => console.error("Lỗi lấy dữ liệu từ:", err));
  };

  // 4. Xử lý khi nhấn nút Next
  handleNext = () => {
    const nextIdx = this.state.currentIdx + 1;
    if (nextIdx < this.state.wordcount) {
      this.fetchWordData(nextIdx);
    }
  };

  // 5. Xử lý khi nhấn nút Prev
  handlePrev = () => {
    const prevIdx = this.state.currentIdx - 1;
    if (prevIdx >= 0) {
      this.fetchWordData(prevIdx);
    }
  };

  render() {
    const { currentIdx, wordcount, currentWord } = this.state;

    return (
      <div className="app-container">
        <h1>Flashcards Full-stack</h1>
        
        {/* Truyền dữ liệu từ API xuống Flashcard */}
        <Flashcard 
          word={currentWord.word} 
          meaning={currentWord.def} 
        />
        
        {/* Hiển thị tiến trình */}
        <div className="status">
          {wordcount > 0 ? `${currentIdx + 1} / ${wordcount}` : "Đang tải..."}
        </div>

        {/* Truyền các hàm điều khiển xuống Controls */}
        <Controls 
          onNext={this.handleNext} 
          onPrev={this.handlePrev}
          isFirst={currentIdx === 0}
          isLast={currentIdx === wordcount - 1}
        />
      </div>
    );
  }
}

export default App;