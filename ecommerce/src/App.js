import './App.css';
// import { useState } from 'react';
import Sidenavbar from './Components/Sidenavbar';
import Grid from '@mui/material/Grid';
import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Collection1 from './Pages/Collection1';
import Cart1 from './Pages/Cart1';
import { createContext } from "react"
import Support from './Pages/Support';
import { productReducer } from './Components/Testcase';
// import { Searchbar } from './Components/Searchbar';


export const CartContext = createContext();

function App() {
  const [state, dispatch] = React.useReducer(productReducer, { cartlist: [], productlist: [] })


  return (
    <>

      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={0}>
          <BrowserRouter>

            <CartContext.Provider value={[state, dispatch]}>
              <Grid item xs={2} md={2}>
                <Sidenavbar />
              </Grid>



              <Grid item xs={10} md={10} sx={{ flexGrow: 1, marginTop: "8px", marginLeft: "15%" }}>


                <Routes>
                  <Route path="/Collection1" element={<Collection1 />} />
                  <Route path="/Cart1" element={<Cart1 />} />
                  <Route path="/Support" element={<Support />} />
                </Routes>
              </Grid>
            </CartContext.Provider>

          </BrowserRouter>
        </Grid>
      </Box>
    </>
  );
}

export default App;
