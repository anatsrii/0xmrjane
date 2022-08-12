import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import { Box } from "@mui/material";

function Home() {
  return (
    // Main container
    <Container 
    >
      <Box component="div" className="container">

        {/* Left box */}
        <Box  className="box1" >
          {/* Image */}
          <Avatar alt="profile" src="profilecorp.png" className="avarta" />
        </Box>

        {/* Right Box Menu */}
        <Box  className="box2">
          <h1>0xMrJane</h1>
          <p>ANAT SRISAPUTH</p>
          <p>
            <Button className="button" component={Link} to="portfolio">
              PORTFOLIO
            </Button>
          </p>
          <p>
            <Button className="button" component={Link} to="projects">
              PROJECTS
            </Button>
          </p>
          <p>
            <Button
              className="button"
              onClick={() => window.open("https://github.com/anatsrii")}
              >
              GITHUB
            </Button>
          </p>
          <p>
            <Button className="button" component={Link} to="contact">
              CONTACT ME
            </Button>
          </p>
          <p>
            <Button className="button" component={Link} to="blog">
              MY BLOG
            </Button>
          </p>

      </Box>
    </Box>
    </Container>
  );
}

export default Home;
