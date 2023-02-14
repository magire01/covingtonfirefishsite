
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


function CompletedOrderItem({ itemId, itemName, itemPrice }) {
  return (
        <Grid container direction="row" alignItems="center">
            <Grid item xs={8}>
                <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.secondary" gutterBottom>
                    {itemName}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    ${itemPrice}
                </Typography>
            </Grid>
        </Grid>

  );
}

export default CompletedOrderItem;
