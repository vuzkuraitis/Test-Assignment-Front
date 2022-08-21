import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import AddForm from "../components/AddForm/AddForm";
import Notification from "../components/Notification/Notification";

const Add = () => {
  const [error, setError] = useState();
  const [productType, setProductType] = useState();
  const [getProduct, setGetProduct] = useState();
  const navigate = useNavigate();

  const getProductType = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/list/product-type`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    setProductType(data);
  };
  useEffect(() => {
    getProductType();
  }, []);

  const getProducts = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/list`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setGetProduct(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const addCard = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/add/add-card`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();
      if (data.err) {
        return setError(data.err);
      }
      getProducts();
      return setError("Succesfully added a Card");
    } catch (err) {
      return setError(err.message);
    }
  };

  if (!getProduct) {
    return <Loading />;
  }
  return (
    <>
      {error && (
        <Notification
          handleClick={() => {
            setError(null);
            navigate("/");
          }}
        >
          {error}
        </Notification>
      )}
      <AddForm
        productType={productType}
        getProduct={getProduct}
        handleSubmit={addCard}
      ></AddForm>
    </>
  );
};

export default Add;
