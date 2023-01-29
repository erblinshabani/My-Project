import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const CatFact = () => {

    const {data, isLoading, refetch} =  useQuery(['cat'], () => {
        return Axios.get('https://catfact.ninja/fact').then(res =>  res.data)
    })

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="catFact">
            <h1>Cat Fact</h1>
            <p>{data?.fact}</p>
            <button onClick={refetch}>Update Fact</button>
        </div>
    )
}