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
import { useContext } from 'react';
import { CartContext } from "../App"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Productcard(props) {

    const [cartlist, setCartlist] = useContext(CartContext);
    const notify = () => toast("Item added!");
    const notify1 = () => toast("Item Removed!");


    const addItem = (item) => {
        setCartlist([...cartlist, item])
        console.log(cartlist);

        // let newArray = [...cartlist];
        // newArray.map((ele, i) => {
        //     return { ...ele, "quantity": 0, "sum": 0 };
        // })
        // setCartlist([...newArray]);
        console.log(cartlist);


        notify();

    }
    const delItem = (index) => {

        const templist = [...cartlist];
        templist.splice(index, 1);
        setCartlist(templist);
        console.log(templist);
        notify1();

    }
    return (
        <><Grid container direction={"row"} spacing={3}>
            {props?.list?.map((item, index) => {
                item.stock = 0; item.brand = 0; item.dicountpercentage = 0;
                return (
                    <Grid item xs={4} sm={4} key={item.id}><Box sx={{ maxWidth: 500, bgcolor: 'background.paper', border: "2px solid black", borderRadius: "2%", padding: "4px" }}>


                        <div sx={{ my: 3, mx: 2 }}>

                            <Typography gutterBottom variant="h4" component="div">
                                {item.title}
                            </Typography>


                            <Typography gutterBottom variant="h6" component="div">
                                Price : {item.price}
                            </Typography>


                            <Typography gutterBottom variant="h6" component="div" >

                                <Grid container spacing={4} >
                                    <Grid item xs={6} sm={6}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={item.images[0]}

                                        />
                                    </Grid>

                                    <Grid item xs={6} sm={6}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={item.images[1]}

                                        />
                                    </Grid>

                                </Grid>
                            </Typography>

                        </div>
                        <Typography color="text.secondary" variant="body2">
                            {item.description}
                        </Typography>

                        <Divider variant="middle" />
                        <Box sx={{ m: 2 }}>
                            <Typography gutterBottom variant="body1">
                                Category : {item.category}
                            </Typography>

                        </Box>
                        {cartlist.some((elem) => elem.id === item.id) ? (<Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                            <Button variant="contained" onClick={() => delItem(item, index)}>Remove from cart</Button>
                        </Box>) : (<Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                            <Button variant="contained" onClick={() => addItem(item)}>Add to cart</Button>
                        </Box>)}


                    </Box>

                    </Grid>

                )
            }
            )
            }
        </Grid>
            <ToastContainer />

        </>
    )
};
