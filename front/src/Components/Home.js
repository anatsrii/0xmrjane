import { Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import '../Style/Home.css';




function Home() {
  
  return (
    // Main container
    <Grid container justifyContent='center' alignItems='center' className='container'> 

      {/* Left box */}
      <Grid className='box1' >

        {/* Image */}
      <Avatar 
        alt="profile"
        src="profilecorp.png"
        className='avarta'
      />
      </Grid>

      {/* Right Box Menu */}
      <Grid row >
        <h1>0xMrJane</h1>
        <p>ANAT SRISAPUTH</p>
        <p><Button className='button'>PORTFOLIO</Button></p>
        <p><Button className='button'>PROJECTS</Button></p>
        <p><Button className='button' onClick={()=> window.open('https://github.com/anatsrii')}>GITHUB</Button></p>
        <p><Button className='button'>CONTACT ME</Button></p>
        <p><Button className='button'>MY BLOG</Button></p>
      </Grid>
    </Grid>
  )
}

export default Home;