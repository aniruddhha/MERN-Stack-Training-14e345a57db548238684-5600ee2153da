import React from 'react'
import { useParams } from "react-router-dom";

function Invoice() {

    const params = useParams()
    return (
        <>
            <h2> You are in Invoice {params.invid} </h2>
        </>
    )
}

export default Invoice
