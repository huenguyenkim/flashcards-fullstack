function Flashcard({ word, meaning }) {
  return (
    <div className="flashcard-area">
      <div className="card word-card">{word}</div>
      <div className="card meaning-card">{meaning}</div>
    </div>
  );
}
export default Flashcard;