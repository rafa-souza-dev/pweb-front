import React, { useState, useEffect, useContext } from 'react';
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
import { Context } from '../../context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

function Login() {
  const [valueEmail, setValueEmail] = useState("");
  
  const { handleLogin } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <Header />
        </header>
        <br></br>
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
              <Grid item xs={6} sx={{ marginTop: 18 }} >
                <div class='right'>
                  <h1>Acessar meus dados</h1>
                  <h3>Informe seu e-mail</h3>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { maxWidth: 500, marginBottom: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      defaultValue={valueEmail}
                      onChange={event => {
                        const { value } = event.target;
                        setValueEmail(value);
                      }}
                    />
                  </Box>
                  <Button 
                    variant='contained'
                    onClick={() => handleLogin(valueEmail)}
                  >
                    Acessar
                  </Button>
                  <Link to="/cadastro"
                    style={{ color: '#000' }}
                  >
                    <p>
                      Ainda não possui cadastro? Registre aqui!
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

export default Login;
