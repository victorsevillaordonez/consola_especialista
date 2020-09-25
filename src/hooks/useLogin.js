import { useState, useEffect } from "react";

const loginFetch = async (username, password) => {
  var data = [];

  let urlFull =
    "http://servicemanagement.arandasoft.com:4433/asdkapi/service/api/v8.6/client/login";

  let body = {
    password: password,
    username: username,
    data: [
      {
        key: "DeviceRegistrationId",
        value:
          "20E3A31BCBC5512888300CFA78C62693CF2025BD965F7D7A486A9264146FE751",
      },
      { key: "DEVICEIMEI", value: "6476487F-314F-4E8E-8974-CFEB2C0DCB67" },
      { key: "DEVICENAME", value: "iPhone 6" },
      { key: "DEVICEBRANDID", value: "2" },
      { value: "0", key: "ServerID" },
    ],
  };
  
  let setttings = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const fetchData = async () => {
    const response = await fetch(urlFull, setttings).catch((error) => {
      console.log(error);
    });
    // let arrWorkOrders = [];
    if (typeof response !== "undefined") {
      data = response;
    //   console.log(data);
    }
  };

  await fetchData();

  return { data };
};

export default loginFetch;
