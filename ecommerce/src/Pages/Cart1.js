import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useContext } from 'react'
import { CartContext } from '../App'
// import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quantity1 from '../Components/Quantity1';
import { useNavigate } from 'react-router-dom';

// import { CollectionsOutlined } from '@mui/icons-material';
// import Quantity from '../Components/Quantity';
// import ProdCard from '../Components/ProdCard';
// import { productReducer } from '../Components/Testcase';
// import { useReducer } from 'react';


export default function Cart1() {
    const navigate = useNavigate();

    const [state, dispatch] = useContext(CartContext);
    const [total, setTotal] = useState();
    const [totalitem, setTotalitem] = useState();
    const addQty = (item) => {
        dispatch({ type: 'increment', payload: item })
        item.subtotal = Number(item.price) * Number(Math.abs(item.quantity));
        console.log(state.cartlist);
        console.log("click")



    }
    const decQty = (item) => {
        if (item.quantity > 1) {
            dispatch({ type: 'decrement', payload: item })
            item.subtotal = Number(item.price) * Number(Math.abs(item.quantity));
            console.log(state.cartlist);
            console.log("click")

        }


    }


    React.useEffect(() => {
        setTotal(state.cartlist?.reduce((accumulator, item) => accumulator + item.subtotal, 0));
        setTotalitem(state.cartlist?.reduce((accumulator, item) => accumulator + item.quantity, 0));
    })





    return (
        <>
            <Grid container direction={"row"} spacing={2}>
                {state.cartlist?.map((item, index) => {

                    return (
                        <Grid item key={item.id} xs={12} sm={12} ><Box sx={{ maxWidth: 1000, bgcolor: 'background.paper', border: "2px solid black", borderRadius: "0%", padding: "4px", marginTop: "50px", marginLeft: "0px", alignContent: "center" }}>


                            <div sx={{ my: 3, mx: 2 }}>
                                <Typography gutterBottom variant="h6" component="div" >

                                    <Grid container spacing={4} >
                                        <Grid item xs={3} sm={3}>
                                            <CardMedia
                                                component="img"
                                                height="200"

                                                image={item.images[0]}

                                            />
                                        </Grid>


                                        <Grid item xs={4} sm={4} >
                                            <Typography gutterBottom variant="h4" component="div">
                                                {item.title}
                                            </Typography>

                                            <Typography color="text.primary" variant="h6">
                                                {item.description}
                                            </Typography>
                                            <Typography gutterBottom variant="body1">
                                                Category : {item.category}
                                            </Typography>

                                        </Grid>
                                        <Grid item xs={5} sm={5} sx={{ marginTop: 5 }}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: 7 }}>
                                                Price : {item.price} $
                                            </Typography>
                                            <span>Quantity  : </span>

                                            <Quantity1 quantity={item.quantity} addQty={() => addQty(item)} decQty={() => decQty(item)} />

                                        </Grid>

                                    </Grid>


                                </Typography>
                            </div>
                            <Divider variant="middle" />

                            <Grid container direction={"row"} sx={{ my: 2 }}>
                                <Grid item xs={8} sm={8} sx={{ textAlign: "start" }}> <Box >
                                    <Button variant="contained" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Remove from the cart</Button>
                                </Box>
                                </Grid>
                                <Grid item xs={4} sm={4} sx={{ textAlign: "start" }}><Typography gutterBottom variant="h5" component="div" >
                                    Sub Total :{item.subtotal} $
                                </Typography>
                                </Grid>

                            </Grid>


                        </Box>

                        </Grid>


                    )
                }
                )
                }
            </Grid>

            {state.cartlist.length !== 0 ? (<><h3>Total Items:{totalitem}</h3><h3>Total Cost:{total} $</h3><Button item variant="contained" color="success" size="large" sx={{ marginTop: "8px" }}>
                Order Now !
            </Button></>) : (<><h3 style={{ marginTop: "25px" }}>Empty cart!!!</h3><h4><Button item variant="contained" onClick={() => navigate("/Collection1")}>Click here for navigating to ShoppingCart</Button></h4></>)}
            <ToastContainer />
        </>
    )
}
