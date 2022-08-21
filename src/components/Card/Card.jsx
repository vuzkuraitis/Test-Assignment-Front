import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.styles";

const Card = ({
  id,
  sku,
  name,
  price,
  size,
  length,
  width,
  height,
  weight,
  className,
  product_typeId,
  handleChange,
  defaultChecked,
}) => {
  return (
    <S.Card id={id} className={className} product_typeId={product_typeId}>
      <input
        type="checkbox"
        id={id}
        value={id}
        defaultChecked={defaultChecked}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></input>
      <h3>{sku}</h3>
      <h3>{name}</h3>
      <h3>{price} $</h3>
      {size ? <h3 className="dvd">Size {size} Mb</h3> : null}
      {length || width || height ? (
        <h3 className="furniture">
          Dimensions {length}cm x {width}cm x {height}cm
        </h3>
      ) : null}
      {weight ? <h3 className="book"> Weight {weight} Kg</h3> : null}
    </S.Card>
  );
};

Card.propTypes = {
  sku: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.string,
  length: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  weight: PropTypes.string,
  product_typeId: PropTypes.string,
};

export default Card;
