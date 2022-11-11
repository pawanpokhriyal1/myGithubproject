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
import { useContext } from 'react'
import { CartContext } from '../App'
// import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quantity from '../Components/Quantity';
// import { CollectionsOutlined } from '@mui/icons-material';
// import Quantity from '../Components/Quantity';
// import ProdCard from '../Components/ProdCard';


export default function Cart() {

    const [cartlist, setCartlist] = useContext(CartContext);
    // const [total, setTotal] = React.useState();
    let total = 0;







    const notify2 = () => toast("Item Removed!");

    const delItem = (index) => {
        const templist = [...cartlist];
        templist.splice(index, 1);
        setCartlist(templist);
        console.log(templist);
        notify2();
    }

    const addFunc = (item, count) => {
        console.log(cartlist);
        count = Number(count);
        item.stock = Math.abs(count);
        console.log(item.stock);
        item.brand = Number(item.stock) * Number(item.price);
        setCartlist([...cartlist]);




    }

    return (
        <><Grid container direction={"row"} spacing={2}>
            {cartlist?.map((item, index) => {
                total += item.brand;
                return (
                    <Grid item key={item.id} xs={12} sm={12} ><Box sx={{ maxWidth: 1000, bgcolor: 'background.paper', border: "2px solid black", borderRadius: "0%", padding: "4px", marginTop: "50px", marginLeft: "0px", alignContent: "center" }}>


                        <div sx={{ my: 3, mx: 2 }}>
                            <Typography gutterBottom variant="h6" component="div" >

                                <Grid container spacing={4} >
                                    <Grid item xs={2} sm={2}>
                                        <CardMedia
                                            component="img"
                                            height="200"

                                            image={item.images[0]}

                                        />
                                    </Grid>


                                    <Grid item xs={3} sm={3} >
                                        <Typography gutterBottom variant="h4" component="div">
                                            {item.title}
                                        </Typography>

                                        <Typography color="text.secondary" variant="body2">
                                            {item.description}
                                        </Typography>
                                        <Typography gutterBottom variant="body1">
                                            {item.category}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.price}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7} sm={7} sx={{ marginTop: 15 }}>
                                        <span>Quantity  : </span>
                                        {/* <span sx={{ maxWidth: 100 }} > <TextField
                                        id="standard-number"
                                        label="Number"
                                        type="number"
                                        name='Quantity'
                                        value={count}
                                        onChange={inputHandle}
                                        onBlur={() => addFunc(count, item.price)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    /></span> */}
                                        <Quantity addFunc={addFunc} item={item} index={index} quantity={item.stock} />

                                    </Grid>

                                </Grid>


                            </Typography>
                        </div>
                        <Divider variant="middle" />
                        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                            <Button variant="contained" onClick={() => delItem(index)}>Remove from the cart</Button>
                        </Box>
                        <Grid container direction={"row"}>
                            <Grid item xs={8} sm={8} sx={{ textAlign: "end" }}><Typography gutterBottom variant="h5" component="div" >
                                Sub Total :
                            </Typography>
                            </Grid>
                            <Grid item xs={3} sm={3} sx={{ textAlign: "center" }}><Typography gutterBottom variant="h5" component="div" >
                                {item.brand}
                            </Typography>
                            </Grid>
                        </Grid>


                    </Box>

                    </Grid>
                    // <ProdCard key={item.id} title={cartlist.title} description={cartlist.description} price={cartlist.price} category={cartlist.category} image={cartlist.images} delItem={() => delItem(index)} />

                )
            }
            )
            }
        </Grid>

            {(cartlist.length !== 0) ? (<><h3>Total:{total}</h3><Button item variant="contained" color="success" size="large" sx={{ marginTop: "8px" }}>
                Order Now !
            </Button></>) : (<h3 style={{ marginTop: "25px" }}>Empty cart!!!</h3>)}
            <ToastContainer />
        </>
    )
}
