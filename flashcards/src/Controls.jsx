function Controls({ current, total, onNext, onPrev }) {
  return (
    <div className="controls-bar">
      <button onClick={onPrev} disabled={current === 1}>←</button>
      <span className="page-info">
        <strong>{current}</strong> / {total}
      </span>
      <button onClick={onNext} disabled={current === total}>→</button>
    </div>
  );
}

export default Controls;