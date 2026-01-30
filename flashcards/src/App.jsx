// src/App.jsx
import React from 'react';
import './App.css';

// Lấy URL Backend từ Environment Variable trên Vercel
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0,
      wordcount: 0,
      data: { word: "word", def: "definition" }
    };
  }

  componentDidMount() {
    this.fetchCount();
    this.fetchWord(0);
  }

  fetchCount = () => {
    fetch(`${API_URL}/wordcount`)
      .then(res => res.json())
      .then(d => this.setState({ wordcount: d.wordcount }));
  };

  fetchWord = (index) => {
    fetch(`${API_URL}/getword/${index}`)
      .then(res => res.json())
      .then(d => this.setState({ data: d, currentIdx: d.index }));
  };

  render() {
    const { currentIdx, wordcount, data } = this.state;
    return (
      <div className="app-container">
        <div className="flashcard-wrapper">
          <div className="card word-card">{data.word}</div>
          <div className="card meaning-card">{data.def}</div>
        </div>

        <div className="controls-bar">
          <button 
            disabled={currentIdx === 0} 
            onClick={() => this.fetchWord(currentIdx - 1)}
          > ← </button>
          
          <span className="page-info">
            {currentIdx + 1} / {wordcount}
          </span>
          
          <button 
            disabled={currentIdx === wordcount - 1} 
            onClick={() => this.fetchWord(currentIdx + 1)}
          > → </button>
        </div>
      </div>
    );
  }
}

export default App;