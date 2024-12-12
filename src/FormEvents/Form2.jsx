import React, { useState } from "react";
import "./Form3.css";
import MyVerticallyCenteredModal from "./ModalComp";

export default function Form2() {
  const [modalShow, setModalShow] = useState(false);  
  const [formData, setFormData] = useState({
    user: "",
    mobile: "",
    email: "",
  });
  const handleInput = (e) => {
    let { name, value, type } = e.target;

    setFormData((a) => {
      // console.log(a,"currentstate")
      return {
        ...a,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(formData.user+" "+formData.mobile+" "+formData.email)
   setModalShow(true)

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleInput}
          placeholder="enter username"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleInput}
          placeholder="enter mobile num"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="enter an email"
        />
        <input type="submit" />
      </form>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
      />
      
    </div>
  );
}