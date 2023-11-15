import React, { Fragment, useState } from "react";

const Form = ({ buttonTitle, onSubmitForm, desc}) => {

    const [description, setDescription] = useState(desc)
    const [oldDescription, setOldDescription] = useState(desc)

  const handleChange = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const onSubmitC = async(e) => {
    e.preventDefault()
    onSubmitForm(description,oldDescription).then(() => console.log("ok"))
    setOldDescription(description)
  }

  return (
    <Fragment>
      <form className="d-flex mt-5" onSubmit={onSubmitC}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
        <button className="btn btn-success">{buttonTitle}</button>
      </form>
    </Fragment>
  );
};

export default Form;
