import {Container, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
function Exchange() {
  const [menuState, setMenuState] = useState([]);
  const [selectMenuTop, setSelectMenuTop] = useState('USD');
  
  useEffect( () => {
    const getMenu = async () => {
      let url = `https://api.exchangerate-api.com/v4/latest/USD`;
      let response = await fetch(url);
      let fetchMenu = await response.json();
      console.log(fetchMenu.rates);
      console.log(Object.keys(fetchMenu.rates));
      setMenuState(Object.keys(fetchMenu.rates));
    }
    getMenu();
  }, []);


  
  return(
    <Container >
     
        {/* Top image */}
        <Box style={{
      justifyContent: "center", alignItems: "center", marginRight: "auto", marginLeft: "auto",
      marginTop: "2rem"}}>
          <img src='/exchanging.png' alt='exchange' />
        </Box>

          {/* Top Select Menu and value */}
       <Box>
          <InputLabel>สกุลเงิน</InputLabel>
          <Select onChange={(e) => setSelectMenuTop(e.target.value)}>
            {menuState.map( (menuList) => (
                <MenuItem key={menuList} value={menuList}>{menuList}</MenuItem>
              )
            )}
          </Select>
          <TextField id="outlined-basic" variant="outlined" />
        </Box>
        {selectMenuTop}
    </Container>
  )
}

export default Exchange;