import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import "./App.css";

const API_URL = "https://api.pexels.com/v1/search?query=Nature";
const API_KEY = "LtZB0I1EbabLt86m4XY2MmSAb1qIfPMzYXV4ygDxZuLKFKH4c0NdC1Ue";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [score, setScore] = useState(0);
  const [cardsArr, setCardsArr] = useState(null);
  const [error, setError] = useState(null);
  async function fetchImg() {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arr = await response.json();
      const imgArr = arr.photos;

      const formattedCards = imgArr.map((img) => {
        return { title: img.alt, url: img.src.portrait, clicked: false };
      });

      setCardsArr(shuffleArray(formattedCards));
    } catch (err) {
      setError(err.message);
    }
  }
  useEffect(() => {
    fetchImg();
  }, []);

  function handleClick(index) {
    const isClicked = cardsArr[index].clicked;

    let updatedArr;

    if (isClicked) {
      setScore(0);
      updatedArr = cardsArr.map((card) => {
        return { ...card, clicked: false };
      });
    } else {
      setScore((prevscore) => prevscore + 1);
      const arr = cardsArr.map((card, i) => {
        if (index === i) {
          return { ...card, clicked: true };
        }
        return card;
      });

      updatedArr = shuffleArray(arr);
    }

    setCardsArr(updatedArr);
  }

  return (
    <>
      <Header score={score} />
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <CardsContainer handleClick={handleClick} cardsArr={cardsArr} />
      )}

      <Footer />
    </>
  );
}

export default App;
