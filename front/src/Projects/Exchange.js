import { Container, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
function Exchange() {
  const [menuState, setMenuState] = useState([]);
  const [selectMenuTop, setSelectMenuTop] = useState('USD');
  const [exchangeValueTop, setExchangeValueTop] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  
  const [selectMenuBottom, setSelectMenuBottom] = useState('THB');
  const [exchangeValueBottom, setExchangeValueBottom] = useState();
 
  useEffect(() => {
    const getMenu = async () => {
      let url = `https://open.er-api.com/v6/latest/${selectMenuTop}`;
      let response = await fetch(url);
      // await response.json()
      // console.log(response.rates)
      let fetchMenu = await response.json();
      // console.log(fetchMenu.rates);
      console.log([...Object.keys(fetchMenu.rates)]);
      setMenuState([...Object.keys(fetchMenu.rates)]);
      console.log(fetchMenu.rates[selectMenuBottom]);
      setExchangeRate(fetchMenu.rates[selectMenuBottom]);
    }
    getMenu();
  }, [selectMenuTop,selectMenuBottom]);

  const exchangeTop = (e) => {
    console.log(e.target.value);
    let topValue = e.target.value;
    // กำหนด state ให้ = event และแทนค่า
    setExchangeValueTop(topValue);
    // Exchange rates * top value = bottom value
    setExchangeValueBottom((topValue * exchangeRate).toFixed(2))
   
  }

  const exchangeBottom = (e) => {
    console.log(e.target.value);
    let bottomValue = e.target.value
    // กำหนด state ให้ = event และแทนค่า ล่าง = ล่าง
    setExchangeValueBottom(bottomValue);
    // bottom value / Exchange rates  = top value
    setExchangeValueTop((bottomValue / exchangeRate).toFixed(2))
    console.log('bottom * top');
  }



  return (
    <Container >

      {/* Top image */}
      <Box style={{
        justifyContent: "center", alignItems: "center", marginRight: "auto", marginLeft: "auto",
        marginTop: "2rem"
      }}>
        <img src='/exchanging.png' alt='exchange' />
      </Box>

      {/* Top Select Menu and value */}
      <Box>
        <InputLabel>สกุลเงิน</InputLabel>
        <Select onChang={(e) => setSelectMenuTop(e.target.value) } value={selectMenuTop}>
          {menuState.map((menuList) => ( 
            <MenuItem key={menuList} value={menuList} > {menuList} </MenuItem>
          )
          )}
        </Select>
        <TextField id="outlined-basic" variant="outlined"  value={exchangeValueTop} type="number" onChange={(e)=> exchangeTop(e)}/>
      </Box>
      {selectMenuTop}

      <Box>
        <h1> = </h1>
      </Box>

      {/* Top Select Menu and value */}
      <Box>
        <InputLabel>สกุลเงิน</InputLabel>
        <Select onChange={(e)=>  setSelectMenuBottom(e.target.value) } value={selectMenuBottom}>
          {menuState.map((menuList) => (
            <MenuItem key={menuList} value={menuList}>{menuList}</MenuItem>
          )
          )}
        </Select>
        <TextField id="outlined-basic" variant="outlined"  value={exchangeValueBottom} type="number" onChange={(e) => exchangeBottom(e)}/>
      </Box>
      {selectMenuBottom}

    </Container>
  )
}

export default Exchange;