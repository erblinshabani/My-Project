import '../../styles/facts.css'
import { CatFact } from "./catFact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const Facts = () => {

    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })
    
    const [showData, setShowData] = useState(false)

    return (
        <div className='article'>
            <div className='data'>
                <h1 id="facts-title">Facts</h1>
                <button onClick={() => setShowData(!showData)}>{showData ? "Hide Cat Fact" : "Show Cat Fact"}</button>
                {showData &&
                <QueryClientProvider client={client}>
                    <CatFact />
                </QueryClientProvider>}
            </div>
        </div>
    )
}