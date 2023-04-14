import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Container, Grid, Toolbar, Button } from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {

  return (

    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar >
          <PhotoCamera />
          <Typography variant='h6'>PhotoAlbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm' style={{ marginTop: '100px ' }}>
            <Typography variant="h2" align="center" color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color='textSecondary' gutterBottom>
              Hello,Paragraph!Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Album
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth='md' style={{
          padding: '20px 0'
        }}>
          <Grid container spacing={4}>

            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Card>
                  <CardMedia image="https://source.unsplash.com/random" title="Image Title"
                    style={{
                      paddingTop: '56.25%'
                    }} />
                  <CardContent style={{
                    flexGrow: 1
                  }}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is the card content section where you define your content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant='contained' size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </main>
      <footer style={{
        backgroundColor: 'smoke',
        padding: '50px 0'
      }}>
        <Typography variant='h5' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' color='secondary' align='center'>
          Here is Something for foooter
        </Typography>
      </footer>
    </>
  );
}

export default App;
