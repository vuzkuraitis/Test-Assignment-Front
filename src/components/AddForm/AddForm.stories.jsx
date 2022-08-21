import React from "react";
import AddForm from "./AddForm";

export default {
  title: "Views/AddForm",
  component: AddForm,
};

export const Primary = () => (
  <AddForm handleSubmit={(values) => console.log(values)} />
);
