import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeliveryAddress from '../components/DeliveryAddress';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { useNavigate } from 'react-router-dom'
import OrderInput from '../components/OrderInput';
import MenuItemCard from '../components/MenuItemCard';
import OrderItem from '../components/OrderItem'
import OrderTimeForm from '../components/OrderTimeForm';

function SubmitOrder({ orderInfo, removeOrderItem, setTotalPrice, setName, setPhone, setOrderType, updateCompleteOrder }) {
  const navigate = useNavigate()

  const [isInProgress, setIsInProgress] = useState(false)
  
  useEffect(() => {
    let cost = 0.00
    orderInfo.items.map((item, index) => {
      cost = cost + item.itemPrice
    })
    setTotalPrice(cost)
  },[orderInfo.items])

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsInProgress(true)
    await delay(1000)
    fetch('http://covingtonfirefishserver-env.eba-mm2mz6gm.us-east-2.elasticbeanstalk.com/api/order/create', {
       method: 'POST',
       body: JSON.stringify({
        name: orderInfo.name,
        phone: orderInfo.phone,
        orderType: orderInfo.orderType,
        orderAddress: orderInfo.orderAddress,
        totalPrice: orderInfo.totalPrice,
        items: orderInfo.items
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       }
    })
    .then((res) => {
      res.json().then(body => updateCompleteOrder(body))
      setIsInProgress(false)
      navigate('/ordercomplete')
    })
    .catch((err) => {
      setIsInProgress(false)
      console.log(err.message)
    });
 };

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
    orderTypeCenter: {
      textAlign: 'center'
    },
    selectedOrderType: {
      backgroundColor: "red",
      color: "white",
      borderRadius: 20
    },
    notSelectedOrderType: {
      backgroundColor: "white",
      color: 'black',
      borderRadius: 20
    },
    text: {
      fontSize: 12,
      fontWeight: "bold"
    },
    confirmOrderButton: {
      color: 'white',
      backgroundColor: isInProgress ? "red" : "black",
      width: "90%",
      height: 50,
      fontSize: 20,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
      marginBottom: 30,
      borderRadius: 5,
    },
    input: { 
      width: "90%", 
      marginLeft:20, 
      marginRight: 20, 
      marginTop: 10, 
      marginBottom: 10 
    }
  }
  return (
    <div>
        <Grid item xs={12}>
          <TextField id="outlined-password-input" label="Name" onChange={(e) => setName(e.target.value)} style={style.input}/>
          <TextField id="outlined-password-input" label="Phone" onChange={(e) => setPhone(e.target.value)} style={style.input}/>
          <OrderTimeForm />
          <Grid container direction="row" justifyContent="center" alignItems="center" style={{ marginTop: 10}}>
            <Grid item xs={4} style={style.orderTypeCenter}>
              <Button onClick={(orderType) => setOrderType("dine")} style={(orderInfo.orderType) == "dine" ? style.selectedOrderType : style.notSelectedOrderType}>Dine In</Button>
            </Grid>
            <Grid item xs={4} style={style.orderTypeCenter}>
              <Button onClick={(orderType) => setOrderType("togo")} style={(orderInfo.orderType) == "togo" ? style.selectedOrderType : style.notSelectedOrderType}>To Go</Button>
            </Grid>
            <Grid item xs={4} style={style.orderTypeCenter}>
              <Button onClick={(orderType) => setOrderType("delivery")} style={(orderInfo.orderType) == "delivery" ? style.selectedOrderType : style.notSelectedOrderType}>Delivery</Button>
            </Grid>
            {(orderInfo.orderType == "delivery") ? <DeliveryAddress /> : <></>}
          </Grid>
          
          <Grid container direction="column" justifyContent="center" alignItems="center" style={{ border: "1px dotted red", marginTop: 20}}>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} color="text.primary" gutterBottom>Order</Typography>

            {orderInfo.items.map((item, index) => (
              <OrderItem
                key={index}
                itemId={item.itemId}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                removeOrderItem={itemId => removeOrderItem(itemId)}
              />
            ))}
            <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ borderTop: "1px solid black", marginTop: 5, width: '90%' }}>
            <Grid item xs={6}>
                <Typography sx={{ fontSize: 20, textAlign: "center" }} color="text.primary" gutterBottom>
                    Amount Due:
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    ${orderInfo.totalPrice}
                </Typography>
            </Grid>
            <Grid item xs={3}>
              <></>
            </Grid>
          </Grid>
          </Grid>         
          
        </Grid>
        <Grid item xs={12}>
          <Button style={style.confirmOrderButton} onClick={handleSubmit} disabled={isInProgress}>Confirm Order</Button>
        </Grid>
        <Backdrop
        sx={{ color: '#fff'}}
        open={isInProgress}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}

export default SubmitOrder;
