import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';






function Quantity1(props) {




    return (
        <>

            <Fab variant="outlined" size="large" onClick={() => props.decQty()} style={{ fontSize: "22px", fontWeight: 900 }}>-</Fab>
            <span style={{ marginRight: "10px", marginLeft: "10px" }} className="h2" >{props.quantity}</span>
            <Fab variant="outlined" size="large" onClick={() => props.addQty()} style={{ fontSize: "22px", fontWeight: 900 }} ><AddIcon /></Fab>
        </>
    );
}
export default Quantity1;

