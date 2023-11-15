import React, { Fragment } from "react";
import Form from "./InputForm";

const InputTodo = () => {
//   const [description, setDescription] = useState("");

  const onSubmitForm = async (desc) => {
    try {
      const body = { desc };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
     
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Form
        buttonTitle={"Add"}
        onSubmitForm={onSubmitForm}
        desc={""}
      />
    </Fragment>
  );
};

export default InputTodo;
