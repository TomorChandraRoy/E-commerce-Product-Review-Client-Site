import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
    const data = useLoaderData();
    

    return (
        <div>
            <h2>{data.name}</h2>
        </div>
    );
};

export default ProductsDetails;