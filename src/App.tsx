import "./styles.css";
import React, { useState, useEffect } from "react";
import FormHandling from "./component/FormHandling";
import Table from "./component/Table";

export default function App() {
  const userListFromMemory = JSON.parse(localStorage.getItem("setUserList"));
  const [userList, setUserList] = useState(userListFromMemory || []);

  const updateUserList = (user) => {
    setUserList((prev) => {
      let arr = [];
      arr.push(user);
      return [...prev, ...arr];
    });
  };

  useEffect(() => {
    localStorage.setItem("setUserList", JSON.stringify(userList));
  }, [userList]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FormHandling updateUserList={updateUserList} />
      <Table tableData={userList} />
    </div>
  );
}
