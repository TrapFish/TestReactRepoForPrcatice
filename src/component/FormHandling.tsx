import React, { useState } from "react";
import "../styles.css";

export default function FormHandling({ updateUserList }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gmail: "",
    age: "",
  });

  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    if (name === "age") {
      const ageValue = parseInt(value);
      if (!isNaN(ageValue)) {
        setFormData({
          ...formData,
          [name]: ageValue,
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const hnadleFormData = (e) => {
    e.preventDefault();
    localStorage.setItem("setUser", JSON.stringify(formData));
    updateUserList(formData);
    setFormData({
      firstName: "",
      lastName: "",
      gmail: "",
      age: "",
    });
  };

  return (
    <div>
      <form onSubmit={hnadleFormData}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            name="firstName"
            value={formData?.firstName}
            onChange={handleOnChnage}
          />
        </div>
        <br></br>
        <div>
          <label>Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={formData?.lastName}
            onChange={handleOnChnage}
          />
        </div>
        <br></br>
        <div>
          <label>Gmail : </label>
          <input
            type="text"
            name="gmail"
            value={formData?.gmail}
            onChange={handleOnChnage}
          />
        </div>
        <br></br>
        <div>
          <label>Age : </label>
          <input
            type="text"
            name="age"
            value={formData?.age}
            onChange={handleOnChnage}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
