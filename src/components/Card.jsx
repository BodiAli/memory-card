function Card({ title, url, handleClick }) {
  return (
    <div onClick={handleClick} className="card-container">
      <img className="img" src={url} alt={title} />
      <p className="card-name">{title}</p>
    </div>
  );
}

export default Card;
