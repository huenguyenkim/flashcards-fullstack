import React from 'react';
import './App.css';
import Flashcard from './Flashcard';
import Controls from './Controls';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      wordcount: 0,
      currentWord: { word: "Loading...", def: "Loading..." }
    };
  }

  // Lấy dữ liệu ngay khi component xuất hiện (Lifecycle)
  componentDidMount() {
    this.getWordCount();
    this.fetchWord(0);
  }

  getWordCount = () => {
    fetch('http://localhost:8000/wordcount')
      .then(res => res.json())
      .then(data => this.setState({ wordcount: data.wordcount }));
  };

  fetchWord = (index) => {
    fetch(`http://localhost:8000/getword/${index}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          currentWord: { word: data.word, def: data.def },
          current: data.index 
        });
      });
  };

  nextWord = () => {
    if (this.state.current < this.state.wordcount - 1) {
      this.fetchWord(this.state.current + 1);
    }
  };

  prevWord = () => {
    if (this.state.current > 0) {
      this.fetchWord(this.state.current - 1);
    }
  };

  render() {
    return (
      <div className="app-container">
        <Flashcard 
          word={this.state.currentWord.word} 
          meaning={this.state.currentWord.def} 
        />
        <div className="status">
          {this.state.current + 1} / {this.state.wordcount}
        </div>
        <Controls 
          onNext={this.nextWord} 
          onPrev={this.prevWord}
          isFirst={this.state.current === 0}
          isLast={this.state.current === this.state.wordcount - 1}
        />
      </div>
    );
  }
}

export default App;