import { useState, useEffect } from "react";



const useFetch = async (url, body) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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
            console.log(error);
        });
        const dataResponse = await response.json()
        setData(dataResponse)
        setLoading(false)
        
    } 

    useEffect(() => {
        fetchData()
    }, [])

    

    return { loading, data }
}

export default useFetch
