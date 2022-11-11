// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function Prodcard1(props) {

    return (
        <>

            {/* {props.item.stock = 1}
            {props.item.brand = props.item.stock * props.item.price} */}
            <Grid item xs={4} sm={4} ><Box sx={{ maxWidth: 500, bgcolor: 'background.paper', border: "2px solid black", borderRadius: "2%", padding: "4px", marginTop: "16px" }}>


                <div sx={{ my: 3, mx: 2 }}>

                    <Typography gutterBottom variant="h4" component="div">
                        {props.item.title}
                    </Typography>


                    <Typography gutterBottom variant="h6" component="div">
                        Price : {props.item.price} $
                    </Typography>


                    <Typography gutterBottom variant="h6" component="div" >

                        <Grid container spacing={4} >
                            <Grid item xs={6} sm={6}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={props.item.images[0]}

                                />
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={props.item.images[1]}

                                />
                            </Grid>

                        </Grid>
                    </Typography>

                </div>
                <Typography color="text.secondary" variant="body2">
                    {props.item.description}
                </Typography>

                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                        Category : {props.item.category}
                    </Typography>

                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button variant="contained" onClick={() => props.addTocart()} >Add to Cart</Button>
                </Box>


            </Box>

            </Grid>




        </>
    )
};
