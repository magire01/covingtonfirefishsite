
import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function OrderTimeForm() {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const timeOptions = ["Now", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"]
      
  return (
        <Grid container direction="row" alignItems="center" justifyContent="center">
            <FormControl sx={{ m: 1, width: "60%" }}>
                <InputLabel id="demo-controlled-open-select-label">Order Time</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                label="Now"
                onChange={handleChange}
                defaultValue="Now"
                >
                  {timeOptions.map((option, index) => (
                    <MenuItem key={index} value={index}>{option}</MenuItem>
                  ))}
                </Select>
            </FormControl>
        </Grid>

  );
}

export default OrderTimeForm;
