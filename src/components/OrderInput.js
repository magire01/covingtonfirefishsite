import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


function OrderInput({ inputType, text }) {
    return (
        <Grid container direction="row" justifyContent="center" style={{ margin: "5%", width: "auto" }}>
            {(text != null) ? 
            <Typography>{text}</Typography> : 
            <TextField id="outlined-password-input" label={inputType} style={{ width: "100%" }}/>}
        </Grid>
    )
}

export default OrderInput;
