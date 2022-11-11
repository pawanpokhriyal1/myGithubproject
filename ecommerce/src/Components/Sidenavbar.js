// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { pagedata } from '../Services/Pagedata';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from '../App';

const drawerWidth = 210;

export default function Sidenavbar() {
    const navigate = useNavigate();
    const [state, dispatch] = useContext(CartContext);
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: ' #081627',
                        color: "white"
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {pagedata.map((page, index) => (
                        <ListItem key={page.id} disablePadding>
                            <ListItemButton onClick={() => navigate(page.route)}>
                                {page.label === "Cart1" ? (<Badge badgeContent={state.cartlist.length} color="secondary" showZero><ListItemIcon style={{ color: "white" }}>
                                    {page.icon}
                                </ListItemIcon></Badge>) : (<ListItemIcon style={{ color: "white" }}>
                                    {page.icon}
                                </ListItemIcon>)}

                                <ListItemText primary={page.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Drawer>

        </Box>
    );
}
