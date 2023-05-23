import { useEffect, useState } from "react";
import IData from "./IData";

export default function () {
    const [data, setData] = useState<IData>();

    const fetchData = async () => {
        const response = await fetch('https://esmond-test-json.s3.us-west-2.amazonaws.com/rental.json');
        setData(await response.json());
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (<div>Rental reference: {data?.reference}</div>);
};
