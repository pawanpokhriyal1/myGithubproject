// // import React from 'react'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// // import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// // import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import { TextField } from '@mui/material';
// // import { useContext } from 'react';
// // import { CartContext } from "../App"




// export default function ProdCard(props) {

//     return (
//         <><Grid container direction={"row"} spacing={4}>

//             <Grid item xs={12} sm={12} ><Box sx={{ maxWidth: 1000, bgcolor: 'background.paper', border: "2px solid black", borderRadius: "0%", padding: "4px", margin: "50px" }}>


//                 <div sx={{ my: 3, mx: 2 }}>
//                     <Typography gutterBottom variant="h6" component="div" >

//                         <Grid container spacing={4} >
//                             <Grid item xs={2} sm={2}>
//                                 <CardMedia
//                                     component="img"
//                                     height="200"

//                                     image={props.image}

//                                 />
//                             </Grid>


//                             <Grid item xs={3} sm={3} >
//                                 <Typography gutterBottom variant="h4" component="div">
//                                     {props.title}
//                                 </Typography>

//                                 <Typography color="text.secondary" variant="body2">
//                                     {props.description}
//                                 </Typography>
//                                 <Typography gutterBottom variant="body1">
//                                     {props.category}
//                                 </Typography>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {props.price}
//                                 </Typography>
//                             </Grid>
//                             <Grid item xs={7} sm={7} sx={{ marginTop: 15 }}>
//                                 <span>Quantity</span>
//                                 <span sx={{ maxWidth: 100 }} > <TextField
//                                     id="standard-number"
//                                     label="Number"
//                                     type="number"
//                                     InputLabelProps={{
//                                         shrink: true,
//                                     }}
//                                     variant="standard"
//                                 /></span>

//                             </Grid>

//                         </Grid>


//                     </Typography>
//                 </div>
//                 <Divider variant="middle" />
//                 <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
//                     <Button variant="contained" onClick={props.delItem()}>Remove from the cart</Button>
//                 </Box>
//                 <Grid container direction={"row"}>
//                     <Grid item xs={8} sm={8} sx={{ textAlign: "end" }}><Typography gutterBottom variant="h5" component="div" >
//                         Total Charges
//                     </Typography>
//                     </Grid>
//                     <Grid item xs={3} sm={3} sx={{ textAlign: "center" }}><Typography gutterBottom variant="h5" component="div" >
//                         100
//                     </Typography>
//                     </Grid>
//                 </Grid>


//             </Box>

//             </Grid>


//         </Grid>

//         </>
//     )
// };

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const TAX_RATE = 0.07;

// function ccyFormat(num: number) {
//     return `${num.toFixed(2)}`;
// }

// function priceRow(qty: number, unit: number) {
//     return qty * unit;
// }

// function createRow(desc: string, qty: number, unit: number) {
//     const price = priceRow(qty, unit);
//     return { desc, qty, unit, price };
// }

// interface Row {
//     desc: string;
//     qty: number;
//     unit: number;
//     price: number;
// }

// function subtotal(items: readonly Row[]) {
//     return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//     createRow('Paperclips (Box)', 100, 1.15),
//     createRow('Paper (Case)', 10, 45.99),
//     createRow('Waste Basket', 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

// export default function SpanningTable() {
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="spanning table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell align="center" colSpan={3}>
//                             Details
//                         </TableCell>
//                         <TableCell align="right">Price</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell>Desc</TableCell>
//                         <TableCell align="right">Qty.</TableCell>
//                         <TableCell align="right">Unit</TableCell>
//                         <TableCell align="right">Sum</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow key={row.desc}>
//                             <TableCell>{row.desc}</TableCell>
//                             <TableCell align="right">{row.qty}</TableCell>
//                             <TableCell align="right">{row.unit}</TableCell>
//                             <TableCell align="right">{ccyFormat(row.price)}</TableCell>
//                         </TableRow>
//                     ))}
//                     <TableRow>
//                         <TableCell rowSpan={3} />
//                         <TableCell colSpan={2}>Subtotal</TableCell>
//                         <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell>Tax</TableCell>
//                         <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
//                         <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={2}>Total</TableCell>
//                         <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
//                     </TableRow>
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }
