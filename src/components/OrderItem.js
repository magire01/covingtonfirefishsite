
import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';


function OrderItem({ itemId, itemName, itemPrice, displayHasOrder, removeOrderItem }) {
  const handleOrder = () => {
    removeOrderItem(itemId)
  }

  const style = {
    item: {
        textAlign: "center",
        fontSize: 20
    },
    price: {
        fontSize: 20
    }
  }
  return (
        <Grid container direction="row" alignItems="center" justifyContent="center">
            <Grid item xs={6}>
                <Typography sx={style.item} color="text.secondary" gutterBottom>
                    {itemName}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={style.price} color="text.secondary" gutterBottom>
                    ${itemPrice}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <IconButton onClick={handleOrder}>
                    <ClearIcon style={{ color: "red" }}/>
                </IconButton>
            </Grid>
        </Grid>

  );
}

export default OrderItem;
