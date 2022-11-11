import React, { useEffect, useState } from 'react'
import Productcard from '../Components/Productcard'
import axios from "axios";

// // import React from 'react'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// // import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// // import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';


export default function Collection() {
    const [list, setList] = useState();
    useEffect(() => {
        console.log("hi")

        axios.get("https://dummyjson.com/products")

            .then((response) => setList(response.data))
            .catch((error) => {
                console.error('Error:', error);
            });
        // setList(data);

    }, [])

    return (
        <>
            <Productcard list={list?.products} />

        </>

    )
}
