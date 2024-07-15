import Card from "./Card";

function CardsContainer({ cardsArr, handleClick }) {
  return (
    <main className="main">
      {cardsArr ? (
        cardsArr.map((card, index) => {
          return (
            <Card key={card.title} title={card.title} url={card.url} handleClick={() => handleClick(index)} />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default CardsContainer;
