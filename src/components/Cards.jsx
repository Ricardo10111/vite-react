export default function Cards({ emoji, title, info }) {
  return (
    <article className="card">
      <div className="card-emoji">{emoji}</div>
      <footer>
        <span className="card-title">{title}</span>
        <span className="card-info">{info}</span>
      </footer>
    </article>
  );
}
