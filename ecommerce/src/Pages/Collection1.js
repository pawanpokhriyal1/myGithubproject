import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { productReducer } from '../Components/Testcase';
// import { useReducer } from 'react';
import Prodcard1 from '../Components/Prodcard1';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { CartContext } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from '../Components/Searchbar';
import SearchFail from '../Components/SearchFail';
;




export default function Collection1() {
    const [ifsearch, setIfsearch] = useState(true);
    // let initialvalue = [];

    const [state, dispatch] = useContext(CartContext);
    const initialvalue = state.productlist.products;
    const [productItem, setProductItem] = useState(initialvalue);
    const [searchInput, setSearchInput] = useState("");

    // setFoundItem(initialvalue);
    useEffect(() => {
        setProductItem(initialvalue);
    }, [initialvalue])



    const handleSearch = (e) => {

        setSearchInput(e.target.value)
        // console.log('init', initialvalue)
        if (e.target.value) {
            let result = initialvalue?.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))
            // setProductItem(result);
            if (result.length > 0) {
                setProductItem(result);
                setIfsearch(true);
                console.log(result);
            }
            else {
                setIfsearch(false);
            }

        }
        else {
            setIfsearch(true);
            setProductItem(initialvalue);

        }



    }

    // const findItem = () => {
    //     let search = String(searchInput);
    //     let result = state?.productlist?.products?.filter((item) => item.title === searchInput)
    //     if (result !== "") {
    //         setArr([...arr,result])
    //         console.log(arr);
    //         console.log("found");
    //         console.log(arr.length);
    //     } else {
    //         setArr(initialvalue);
    //         console.log("not found");
    //     }

    // }

    const addTocart = (item) => {
        let res = state.cartlist.some((elem) => elem.id === item.id)
        if (res === false) {
            dispatch({ type: 'ADD_TO_CART', payload: item, quantity: 1, subtotal: item.price })
            toast("Item added!")
            console.log(state.cartlist)
        }
        else {
            toast("Item already added!");
        }

    };




    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                dispatch({ type: 'FETCH_LIST', payload: response.data })
            })
            .then((response) => console.log(response.data))
            .catch(error => console.log("error occured"))
    }, [])

    return (
        <><Grid container direction={"row"} ><Grid item xs={12} sm={12} ><Searchbar container searchInput={searchInput} handleSearch={(e) => handleSearch(e)} /></Grid></Grid>
            <Grid container direction={"row"} spacing={3} className="mt-5 pt-5">
                {ifsearch ? (productItem?.map((item, index) => {

                    return (<Prodcard1 item={item} index={index} key={item.id} addTocart={() => addTocart(item)} />)
                })) : (<SearchFail className="mt-5 pt-5" searchInput={searchInput} />)}

            </Grid>
            <ToastContainer />

        </>
    )
}
