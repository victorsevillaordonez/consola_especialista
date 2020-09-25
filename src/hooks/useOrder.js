import { useState, useEffect } from "react";


const orderFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let pathFullSync = "workorders.svc/json/FullSync"
    let url = 'http://aflsdesa.arandasoft.com:93/AFLS_DESA_03/afls'
    let urlFull = url + "/mobv1/" + pathFullSync

    let body = {
        "lastRequestDate": null,
        "getStock": true,
        "workOrders": [],
        "syncLocations": [],
        "specialist": "dabril01",
        "requireSchedule": false,
        "requestDate": null,
        "defaultAuth": "ARANDA",
        "password": "123456",
        "username": "dabril01",
        "platform": "iOs",
        "pushId": ""
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

        const response = await fetch(urlFull, setttings).catch((error) => {
            console.log(error);
        });

        let arrWorkOrders = [];
        if (typeof response !== 'undefined') {
            const dataResponse = await response.json()

            let objFullSyncronizationResult = dataResponse.FullSyncronizationResult;
            let objEntity = objFullSyncronizationResult.Entity;
            arrWorkOrders = objEntity.WorkOrders;
        }
        setData(arrWorkOrders)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { loading, data };
}

export default orderFetch


