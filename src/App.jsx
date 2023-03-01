import Card from '@mui/material/Card';
import Box from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import './App.css'
import  { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function App() {

  const myState = useSelector((state) => state.changeTheNumber); // calling the reducer which contains changeTheNumber
  // console.log(myState);
  const dispatch = useDispatch();
  // console.log(dispatch);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ bgcolor: 'black' }} >
        <div className="App">
          <Typography sx={{ color: "#9ea9b1" }} gutterBottom><h1>Increment/Decrement Counter</h1></Typography>
          <Typography sx={{ color: "#9ea9b1" }}><h4>Using React and Redux</h4></Typography>
          <Tooltip title="Decrement"><Button sx={{ marginRight: '5px' }} variant="contained" color="error" onClick={(e) => { e.preventDefault(); dispatch(decNumber())}}>-</Button></Tooltip>
          <FormControl variant="standard">
            <input value = {myState} name="quantity" focused/>
          </FormControl>
          <Tooltip title="Increment"><Button sx={{ marginLeft: '5px' }} variant="contained" color="success" onClick={(e) => { e.preventDefault(); dispatch(incNumber(5))}}>+</Button></Tooltip>
        </div>
      </Card>
    </Box>
  )
}

export default App
