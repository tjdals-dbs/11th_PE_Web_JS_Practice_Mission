export default function App() {
  const movieTitle = "스파이더맨 브랜드 뉴 데이";
  const genre = "액션";
  const releaseDate = "2026.07.29";

  return (
    <article className="movie-card">
      <h1>{movieTitle}</h1>
      <p>장르: {genre}</p>
      <p>개봉일: {releaseDate}</p>
    </article>
  );
}