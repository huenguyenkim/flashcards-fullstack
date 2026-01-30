function Controls({ onNext, onPrev, isFirst, isLast }) {
  return (
    <div className="controls">
      <button onClick={onPrev} disabled={isFirst}>← Previous</button>
      <button onClick={onNext} disabled={isLast}>Next →</button>
    </div>
  );
}
export default Controls;