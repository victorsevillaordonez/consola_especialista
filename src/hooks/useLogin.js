import { useState, useEffect } from "react";

const loginFetch = async (username, password) => {
  var data = [];

  let urlFull =
    "http://192.168.3.31/ASMS_API/api/v9/authentication/";

  let body = {
    password: password,
    userName: username
  };
  console.log(JSON.stringify(body))
  let setttings = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const fetchData = async () => {
    const response = await fetch(urlFull, setttings).catch((error) => {
      console.log("ERROR");
      console.log(error);
    });
    if (typeof response !== "undefined") {
      data = response;
    }
  };

  await fetchData();

  return { data };
};

export default loginFetch;
