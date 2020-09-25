import { useState, useEffect } from "react";


const orderFetch = async() => {
    var arrData= []

    let project = 1
    let itemtype = 1
    let url = 'http://192.168.3.31/ASMS_API/api/v9/item/project/'+project+'/'+itemtype+'/list'

    let body = {
        "pageSize": 10,
        "pageIndex": 0,
        "orderField": "Id",
        "orderType": "asc",
        "repository": "1",
    }
    let setttings = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const fetchData = async () => {

        const response = await fetch(url, setttings).catch((error) => {
            
        });
        console.log("after")
        if (typeof response !== 'undefined') {
            arrData = await response.json()
        }
    }
    await fetchData()

    console.log(arrData);
    return { arrData };
}

export default orderFetch


