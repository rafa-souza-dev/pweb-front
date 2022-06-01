import React from 'react';
import Logo from '../../assets/vector.png';
import Person from '../../assets/person.png';
import Header from '../../components/Header';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

function Cadastro() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Grid container columns={16}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={14}>
            <Grid container spacing={13}>
              <Grid item xs={6}>
                <div class='left'>
                  <img className="person" src={Person} alt="person"
                    height={550}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div class='right'>
                  <h1>Insira seus dados!</h1>
                  <h3>Dados Pessoais</h3>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { maxWidth: 500, marginBottom: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Altura (Cm)" variant="outlined" />
                    <TextField id="outlined-basic" label="Gênero/Sexo" variant="outlined"
                      sx={{ marginLeft: 1 }}
                    />
                  </Box>
                  <h3>Metas</h3>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { maxWidth: 500, marginBottom: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Peso inicial(atual)" variant="outlined" />
                    <TextField id="outlined-basic" label="Peso Desejado" variant="outlined"
                      sx={{ marginLeft: 1 }}
                    />
                    <TextField id="outlined-basic" label="Data para alcançar" variant="outlined" />
                  </Box>
                  <Button variant='contained'>
                    Finalizar
                  </Button>
                  <Link to="/login"
                    style={{ color: '#000' }}
                  >
                    <p>
                      Já possui cadastro? Entre aqui!
                    </p>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default Cadastro;
