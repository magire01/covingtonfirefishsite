
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
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

function MenuItemCard({ itemName, itemPrice, displayHasOrder, updateOrderItem }) {
  const [isSelected, setIsSelected] = useState(false)

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleOrder = async () => {
    setIsSelected(true)
    displayHasOrder()
    updateOrderItem({ itemName: itemName, itemPrice: itemPrice })
    await delay(1000)
    setIsSelected(false)
  }
  return (
    <Card sx={{ minWidth: 275 }} style={{ border: "1px black solid", margin: "5% 1% 5% 1%" }}>
      <CardContent>
        <Grid container direction="row" alignItems="center">
            <Grid item xs={6}>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    {itemName}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    ${itemPrice}
                </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardActions>
                <IconButton onClick={handleOrder}>
                  {!isSelected ? <AddIcon style={{ color: "red", fontSize: 40 }}/> : <CheckIcon style={{ color: "green", fontSize: 40 }}/>}
                </IconButton>
              </CardActions>
            </Grid>
        </Grid>
      </CardContent>
    </Card>

  );
}

export default MenuItemCard;
