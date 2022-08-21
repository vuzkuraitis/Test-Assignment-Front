import React, { useState } from "react";
import * as S from "./AddForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import SelectInput from "../SelectInput/SelectInput";

const AddForm = ({ handleSubmit, productType, getProduct, id, name }) => {
  const lastProduct = [...getProduct].pop();
  const [cardValues, updateCardValues] = useState({
    sku: `SKU00${lastProduct ? lastProduct.id + 1 : 1}`,
  });

  return (
    <S.AddForm>
      <Hero title="Product Add" />
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();

              handleSubmit(cardValues);
            }}
          >
            <div id={id}>{cardValues.sku}</div>

            <SelectInput
              options={productType}
              label="Product Type"
              type="number"
              name="Product"
              handleChange={(productTypeValue) =>
                updateCardValues({
                  ...cardValues,
                  product_typeId: productTypeValue,
                })
              }
            />
            <TextInput
              className="always"
              type="text"
              label="Name"
              placeholder="Name"
              handleChange={(nameValue) =>
                updateCardValues({ ...cardValues, name: nameValue })
              }
            />
            <TextInput
              className="always"
              type="number"
              min="0"
              step="1"
              label="Price"
              placeholder="Price"
              handleChange={(priceValue) =>
                updateCardValues({
                  ...cardValues,
                  price: priceValue,
                })
              }
            />
            {cardValues.product_typeId === "1" ? (
              <TextInput
                type="number"
                min="0"
                step="1"
                label="Size MB"
                placeholder="Size MB"
                handleChange={(sizeValue) =>
                  updateCardValues({
                    ...cardValues,
                    size: sizeValue,
                  })
                }
              />
            ) : null}
            {cardValues.product_typeId === "2" ? (
              <>
                <TextInput
                  type="number"
                  min="0"
                  step="1"
                  label="Length cm"
                  placeholder="Length cm"
                  handleChange={(lengthValue) =>
                    updateCardValues({
                      ...cardValues,
                      length: lengthValue,
                    })
                  }
                />
                <TextInput
                  type="number"
                  min="0"
                  step="1"
                  label="Width cm"
                  placeholder="Width cm"
                  handleChange={(widthValue) =>
                    updateCardValues({
                      ...cardValues,
                      width: widthValue,
                    })
                  }
                />
                <TextInput
                  type="number"
                  min="0"
                  step="1"
                  label="Height cm"
                  placeholder="Height cm"
                  handleChange={(heightValue) =>
                    updateCardValues({
                      ...cardValues,
                      height: heightValue,
                    })
                  }
                />
              </>
            ) : null}
            {cardValues.product_typeId === "3" ? (
              <TextInput
                type="number"
                min="0"
                step="1"
                label="Weight Kg"
                placeholder="Weight Kg"
                handleChange={(weightValue) =>
                  updateCardValues({
                    ...cardValues,
                    weight: weightValue,
                  })
                }
              />
            ) : null}
            <Button type="submit">Save</Button>
          </form>
        </div>
      </Section>
    </S.AddForm>
  );
};

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  active: PropTypes.func,
};

export default AddForm;
