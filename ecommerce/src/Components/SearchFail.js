import React from 'react'
import SearchOffIcon from '@mui/icons-material/SearchOff';

export default function SearchFail(props) {
    return (
        <div style={{ marginTop: "32px", marginLeft: "32px", fontSize: "32px" }}>
            <span style={{ marginTop: "32px", marginLeft: "32px", color: "black", fontSize: "32px" }}><SearchOffIcon /> </span>
            <span style={{ marginTop: "32px", marginLeft: "32px", color: "blue", fontSize: "32px" }}>No Items matched your search !!!</span> <span style={{ marginTop: "32px", marginLeft: "32px", color: "black", fontSize: "32px" }}> {props.searchInput}</span>

        </div>
    )
}
