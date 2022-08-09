import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../Style/Home.css';




function Home() {
  
  return (
    // Main container
    <Container width="xl" className='container' >

      {/* Left box */}
      <Box className='box' >

        {/* Image */}
      <Avatar 
        alt="profile"
        src="profilecorp.png"
        sx={{ width: 480, height: 540 }}
      />
      </Box>

      {/* Right Box Menu */}
      <Box className='box' >
        <h1>0xMrJane</h1>
        <p>FULL STACK DEVELOPER</p>
        <p><Button className='button'>PORTFOLIO</Button></p>
        <p><Button className='button'>PROJECTS</Button></p>
        <p><Button className='button' onClick={()=> window.open('https://github.com/anatsrii')}>GITHUB</Button></p>
        <p><Button className='button'>CONTACT ME</Button></p>
        <p><Button className='button'>MY BLOG</Button></p>
      </Box>
    </Container>
  )
}

export default Home;