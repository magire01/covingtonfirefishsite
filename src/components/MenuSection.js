import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuItemCard';
import Typography from '@mui/material/Typography';

function MenuSection({ sectionName, items, displayHasOrder, updateOrderItem }) {
  return (
  
    <div>
        <Typography variant='h5' style={{ color: "gray", margin: 30 }}>{sectionName}</Typography>
        {items.map((item, index) => (
          <MenuItemCard key={index} itemName={item.itemName} itemPrice={item.itemPrice} displayHasOrder={displayHasOrder} updateOrderItem={(obj) => updateOrderItem(obj)} />
        ))}
    </div>

  );
}

export default MenuSection;
