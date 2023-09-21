import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


const Navbar = () => {
    const [show, setShow] = useState(false);
    const [popup, setPopup] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",

        },
        {
            text: "About",

        },
        {
            text: "Login",

        },
        {
            text: "Register",

        },

    ];
    return (
        <>
            <nav>
                <div className="nav-logo-container">


                </div>
                <h1 className="black">Swiggy</h1>
                <div className="navbar-links-container">

                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Ratings</a>
                    <button className="button">Login</button>
                    <button className="button">Register</button>
                </div>
                <div className="navbar-menu-container">
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>
                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => setOpenMenu(false)}
                        onKeyDown={() => setOpenMenu(false)}
                    >
                        <List>
                            {menuOptions.map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
            </nav>

        </>
    );
};

export default Navbar;