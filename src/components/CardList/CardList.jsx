import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardList.styles";

const CardList = ({
  cards,
  className,
  cardsIdValue,
  setCardsIdValue,
  setChecked,
  checked,
}) => {
  return (
    <S.CardList className="activeCards" cards={cards}>
      {cards &&
        cards.map((card, index) => (
          <S.CardItem
            className={className}
            key={index}
            id={card.id}
            sku={card.sku}
            name={card.name}
            price={card.price}
            size={card.size}
            length={card.length}
            width={card.width}
            height={card.height}
            weight={card.weight}
            product_typeId={card.product_typeId}
            defaultChecked={checked}
            handleChange={(idValue) => {
              const idIndex = cardsIdValue.findIndex((id) => id === idValue);
              if (idIndex >= 0) {
                cardsIdValue.splice(idIndex, 1);
              } else {
                cardsIdValue.push(idValue);
              }
              setCardsIdValue(cardsIdValue);
              setChecked(!checked);
            }}
          />
        ))}
    </S.CardList>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      size: PropTypes.string,
      length: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
      weight: PropTypes.string,
      product_typeId: PropTypes.string,
    })
  ),
};

export default CardList;
