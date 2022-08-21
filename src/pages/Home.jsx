import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import Section from "../components/Section/Section";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button/Button";
import Notification from "../components/Notification/Notification";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [error, setError] = useState();
  const [cards, setCards] = useState();
  const [cardsIdValue, setCardsIdValue] = useState([]);
  const [checked, setChecked] = useState(false);

  const getCards = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/list`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setCards(data);
  };
  useEffect(() => {
    getCards();
  }, []);

  const removeCards = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/list/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );
      const data = await res.json();
      if (data.err) {
        return setError(data.err);
      }
      if (!checked) {
        return setError("Please select a Card/Cards");
      }
      getCards();
      return setError("Succesfully deteled a Card/Cards");
    } catch (err) {
      return setError(err.message);
    }
  };

  if (!cards) {
    return <Loading />;
  }

  return (
    <>
      <Section>
        <Hero title="Product List">
          <div>
            <Link className="link" to="/add">
              <Button className="add" type="button">
                Add
              </Button>
            </Link>

            <Button
              type="button"
              handleClick={() => {
                removeCards(cardsIdValue);
                setChecked(null);
              }}
              value={[...cardsIdValue]}
            >
              Mass Delete
            </Button>
          </div>
        </Hero>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        {cards && cards.length === 0 && <div>No data available</div>}
        {cards && cards.length > 0 && (
          <CardList
            cards={cards}
            setCardsIdValue={setCardsIdValue}
            cardsIdValue={cardsIdValue}
            setChecked={setChecked}
            checked={checked}
          ></CardList>
        )}
      </Section>
    </>
  );
};

export default Home;
