import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


function DeliveryAddress() {
    const style = {
        container: {
            margin: 20
        },
        input: {
            marginTop: 20,
            width: '95%'
        }
    }

    return (
        <Grid container direction="column" alignItems="center" style={style.container}>
            <TextField id="outlined-basic" label="Address" variant="outlined" style={style.input}/>
            <TextField id="outlined-basic" label="Address Line 2" variant="outlined" style={style.input} />
            <TextField id="outlined-basic" label="City, State ZIP" variant="outlined" style={style.input} />
        </Grid>
    );
}

export default DeliveryAddress;
