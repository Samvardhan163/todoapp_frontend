import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";

export default function AddForm() {
  return (
    <div className="AddForm">
      <Header title={"Todo Form"}></Header>
      <Form></Form>
    </div>
  );
}
