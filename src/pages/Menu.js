import { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import MenuSection from '../components/MenuSection';
import MenuItemData from '../MenuItems.json'
import { Link, useNavigate } from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

function Menu({ updateOrderItem, displaySubmitPage, orderInfoCount, displayHasOrder, hasOrder }) {
  const [isInProgress, setIsInProgress] = useState(false)

  const navigate = useNavigate()

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const navigateToSubmitOrder = async () => {
    setIsInProgress(true)
    await delay(1000)
    navigate('/submitorder')
    setIsInProgress(false)
  }
  const style = {
    hasOrder: {
      bottom: 20, 
      display: "block",
      position: 'fixed',
      borderRadius: 5,
      color: 'white',
      backgroundColor: isInProgress ? "red" : "black",
      width: "90%",
      height: 50,
      fontSize: 20,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
      marginBottom: 30
    },
    noOrder: {
      display: "none"
    },
    link: {
      width: "100%",
      backgroundColor: "black",
      color: "white"
    }
  }

  return (
    <div style={{ marginBottom: 120 }}>
      {/* <Link to="/submitorder" > */}
          <Fab style={!hasOrder ? style.noOrder : style.hasOrder} onClick={navigateToSubmitOrder} disabled={isInProgress}>
            Submit Order - {orderInfoCount}
          </Fab>
        {/* </Link> */}
      <div>
        {MenuItemData.map((menu, index) => (
          <MenuSection key={index} sectionName={menu.section} items={menu.items} displayHasOrder={displayHasOrder} updateOrderItem={(obj) => updateOrderItem(obj)} />
        ))}
      </div>
      <Backdrop
        sx={{ color: '#fff'}}
        open={isInProgress}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}

export default Menu;
