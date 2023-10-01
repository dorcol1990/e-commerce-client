import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Item from "../../components/Item";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Typography } from "@mui/material";
import { setItems } from "../../state";
import useMediaQuery from "@mui/material/useMediaQuery";

const ShoppingList = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('all');
    const items = useSelector((state)=> state.cart.items)
    const isNonMobile = useMediaQuery("(min-width:600px)");
    console.log('items', items);

    const handleChange = (event, newValue)=>{
        setValue(newValue);
    }

    async function getItems(){
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            {method: "GET"}
        )
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data))
    }

    useEffect(()=>{
        getItems();
    }, [])

  return (
    <div>ShoppingList</div>
  )
}

export default ShoppingList