import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


import OrderInput from '../components/OrderInput';
import MenuItemCard from '../components/MenuItemCard';
import CompletedOrderItem from '../components/CompletedOrderItem'

function OrderComplete({ orderInfo, resetOrder }) {

    const [completedOrder, setCompletedOrder] = useState({
        orderId: null,
        name: null,
        date: null,
        phone: null,
        items: [],
        totalPrice: 0.00,
        orderType: null,
        orderAddress: null
    })
    useEffect(() => {
        setCompletedOrder(orderInfo)
    }, [])
    
    const getOrderType = (orderType) => {
      switch (orderType) {
        case "togo":
          return "To Go"
        case "delivery":
          return "Delivery"
        default:
          return "Dine In"
      }
    }


  const style = {
    hasOrder: {
      bottom: 20, 
      position: 'fixed', 
      width: "90%", 
      borderRadius: 5, 
      backgroundColor: "black",
      color: "white",
      display: "block"
    },
    noOrder: {
      display: "none"
    },
    spinnerDisplay: {
      display: "flex"
    },
    spinnerHide: {
      display: "none"
    },
    orderComplete: {
      fontSize: 30,
      backgroundColor: "black",
      color: "white",
      width: "100%",
      textAlign: "center"
    },
    orderId: {
      fontSize: 50,
      backgroundColor: "red",
      color: "white",
      width: "100%",
      textAlign: "center"
    }
  }
  return (
    <div>       
        <Grid container direction="column" justifyContent="center" alignItems="center">
                <Typography style={style.orderComplete}>Thank You For Your Order</Typography>
                <Typography style={style.orderId}>Order # {orderInfo.orderId}</Typography>
                <Typography>Order Type: {getOrderType(orderInfo.orderType)}</Typography>
                <Typography>Name: {orderInfo.name}</Typography>
                <Typography>Phone: {orderInfo.phone}</Typography>
                <Grid container direction="column" justifyContent="center" alignItems="center" style={{ border: "1px dotted red", marginTop: 20}}>
                  <Typography sx={{ fontSize: 20, textAlign: "center" }} color="text.primary" gutterBottom>Order</Typography>

                  {orderInfo.items.map((item, index) => (
                  <CompletedOrderItem key={index} itemId={item.itemId} itemName={item.itemName} itemPrice={item.itemPrice} />
                   ))}
                  <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ borderTop: "1px solid black", marginTop: 5, width: '90%' }}>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: 20, textAlign: "center", color: 'red' }} color="text.primary" gutterBottom>
                            Amount Due:
                        </Typography>
                    </Grid>
                    <Grid item xs={4} >
                        <Typography sx={{ fontSize: 20, color: 'white', width: '100%', color: 'red' }} color="text.primary" gutterBottom>
                            ${orderInfo.totalPrice}
                        </Typography>
                    </Grid>

                  </Grid>
                </Grid>
                
        </Grid>
    </div>
  );
}

export default OrderComplete;
