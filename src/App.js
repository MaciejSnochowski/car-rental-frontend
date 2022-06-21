import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { theme } from "./theme";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import FormDialog from "./components/FormDialogs"
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const myImage = new URL("./images/image.jpg", import.meta.url);
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#123123",
  },
  hero: {
    backgroundImage: ` linear-gradient(rgba(0,0,0,0.5),rgb(0,0,0,0.5)),url('https://www.zante.info/wp-content/uploads/2021/01/car-rental-zakynthos-zante.png')`,
    height: "712px ",
    backgroundPosition: "center ",
    backgroundRepeat: "no-repeat ",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    fontFamily: ["Chakra Petch", "sans-serif"].join(","),
  },
  text: {
    color: "#ff09aa",
    backgroundColor:
      "linear-gradient(rgba(120,90,45,1),rgb(120,90,45,1),#282828",
    height: "200px",
  },
  card: {
    maxWidth: "100%",
  },
  font: {
    typography: {
      fontFamily: ["Gloria Hallelujah", "cursive"].join(","),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>Wypożyczalnia samochodowa CarRent</Box>
      </Box>
      <Container
        maxWidth="lg"
        style={{
          paddingTop: theme.spacing(3),
        }}
      >
        <Typography
          style={{
            fontWeight: 800,
            paddingBottom: theme.spacing(3),
            fontSize: 40,
          }}
        >
          Dostępne samochody
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }} className={classes.card}>
              <CardMedia
             
                component="img"
                height="250"
                
                image="https://images.unsplash.com/photo-1560282013-aa23a6e5e1a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="skoda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Skoda Superb
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 ferujemy Państwu wyjątkowy egzemplarz SKODA SUPERB 4x4 z silnikiem benzynowy 1.8 Turbo 
                </Typography>
              </CardContent>
              <CardActions>
             
                <FormDialog/> {/*<<--- button over here*/ }
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image="https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ford F150
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Silnik 5.0 390KM,
                 samochód naprawdę godny uwagi, dzięki dobrym parametrom technicznym, bardzo dobrze się prowadzi. 
                </Typography>
              </CardContent>
              <CardActions>
                <FormDialog/> 
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image="https://images.unsplash.com/photo-1541800658-6599fffd81c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=616&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   Audi A3 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 AUDI A3 Sportback z 7-biegową przekładnią dwusprzęgłową S tronic, przyspieszenie 0-100 km/h: 8,4 s
                </Typography>
              </CardContent>
              <CardActions>
                <FormDialog/> 
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image="https://images.unsplash.com/photo-1604838833701-1acdb84b300c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  BMW M4 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Samochód napędzany jest benzynowym silnikiem R6 3,0 l Twin Power Turbo o mocy 431 KM.
                </Typography>
              </CardContent>
              <CardActions>
                <FormDialog/> 
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Strona została stworzona dla celów edukacyjnych przez Jacka Nowickiego
          i Macieja Snochowskiego
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </div>
  );
}

export default App;
