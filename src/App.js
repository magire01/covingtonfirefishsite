import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import SubmitOrder from './pages/SubmitOrder'
import Menu from './pages/Menu';
import OrderComplete from './pages/OrderComplete';
import MenuSection from './components/MenuSection';
import MenuItemData from './MenuItems.json'

import BannerPic from './fishfrybanner.png'

import { Routes, Route } from 'react-router-dom'


function App() {
  const [displayPage, setDisplayPage] = useState("home")
  const [orderInfo, setOrderInfo] = useState({
    orderId: null,
    name: null,
    date: null,
    phone: null,
    items: [],
    totalPrice: 0.00,
    orderType: "dine",
    orderAddress: null
  })

  const [hasOrder, setHasOrder] = useState(false);
    const displayHasOrder = () => {
      setHasOrder(true)
    }

  const displaySubmitPage = () => {
    setDisplayPage("submit")
  }

  const updateOrderItem = (obj) => {
    let itemArray = []
    itemArray = orderInfo.items
    obj.itemId = orderInfo.items.length
    itemArray.push(obj)
    setOrderInfo({
      ...orderInfo,
      items: itemArray
    })
  }

  const removeOrderItem = (removeId) => {
    let itemArray = []
    itemArray = orderInfo.items

    const filteredOrderInfo = orderInfo.items.filter((item) => item.itemId !== removeId)

    setOrderInfo({
      ...orderInfo,
      items: filteredOrderInfo
    })
  }

  const setName = (name) => {
    setOrderInfo({ ...orderInfo, name: name })
  }

  const setPhone = (phone) => {
    setOrderInfo({ ...orderInfo, phone: phone })
  }

  const setOrderType = (orderType) => {
    setOrderInfo({ ...orderInfo, orderType: orderType})
  }

  const setTotalPrice = (cost) => {
    setOrderInfo({ ...orderInfo, totalPrice: cost })
  }

  const updateCompleteOrder = (obj) => {
    setOrderInfo(obj)
  }

  const resetOrder = () => {
    setOrderInfo({
      orderId: null,
      name: null,
      date: null,
      phone: null,
      items: [],
      totalPrice: 0.00,
      orderType: null,
      orderAddress: null
    })
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
    banner: {
      width: "90%",
      height: 'auto',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      marginBottom: 20
    }
  }

  return (
    <div>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
           <img src={BannerPic} style={style.banner} />
        </Grid>
      </Grid>
      <Routes>
        <Route path="/" 
          element={<Menu 
            updateOrderItem={(obj) => updateOrderItem(obj)} 
            displaySubmitPage={displaySubmitPage} 
            orderInfoCount={orderInfo.items.length} 
            displayHasOrder={displayHasOrder} hasOrder={hasOrder} />} 
          />
        <Route path="/submitorder" 
          element={<SubmitOrder 
            orderInfo={orderInfo} 
            removeOrderItem={(itemId) => removeOrderItem(itemId)} 
            setTotalPrice={cost => setTotalPrice(cost)}
            setName={name => setName(name)}
            setPhone={phone => setPhone(phone)}
            setOrderType={orderType => setOrderType(orderType)}
            updateCompleteOrder={obj => updateCompleteOrder(obj)}
            />} 
          />
        <Route path="/ordercomplete" 
          element={<OrderComplete 
          orderInfo={orderInfo} 
          resetOrder={() => resetOrder()}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
