import React, { useState, useContext } from 'react';
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
import history from '../../history';
import { Context } from '../../context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

function Cadastro() {
  const { handleLogin } = useContext(Context);

  const [valueNome, setValueNome] = useState(localStorage.getItem("nome"));
  const [valueEmail, setValueEmail] = useState(localStorage.getItem("email"));
  const [valueAltura, setValueAltura] = useState(localStorage.getItem("altura"));
  const [valueGenero, setValueGenero] = useState(localStorage.getItem("genero"));
  const [valuePesoInicial, setValuePesoInicial] = useState(localStorage.getItem("pesoInicial"));
  const [valuePesoFinal, setValuePesoFinal] = useState(localStorage.getItem("pesoFinal"));
  const [valueDataFinal, setValueDataFinal] = useState(localStorage.getItem("dataFinal"));

  const atualizar = () => {
    fetch(`http://127.0.0.1:8081/api/usuario/${localStorage.getItem("id")}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: valueNome,
        email: valueEmail,
        altura: valueAltura,
        genero: valueGenero,
        pesoInicial: valuePesoInicial,
        pesoFinal: valuePesoFinal,
        dataFinal: valueDataFinal,
      })
    });
    handleLogin();
    history.push("/perfil");
    history.go();
  }

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
              <Grid item xs={6}>
                <div class='right'>
                  <h1>Atualizar dados</h1>
                  <h3>Dados Pessoais</h3>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { maxWidth: 500, marginBottom: 1.2 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                      defaultValue={localStorage.getItem("nome")}
                      onChange={event => {
                        const { value } = event.target;
                        setValueNome(value);
                      }}
                    />
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
                      defaultValue={localStorage.getItem("email")}
                      onChange={event => {
                        const { value } = event.target;
                        setValueEmail(value);
                      }}
                    />
                    <TextField id="outlined-basic" label="Altura (Cm)" variant="outlined"
                      defaultValue={localStorage.getItem("altura")}
                      onChange={event => {
                        const { value } = event.target;
                        setValueAltura(value);
                      }}
                    />
                    <TextField id="outlined-basic" label="Gênero/Sexo" variant="outlined"
                      sx={{ marginLeft: 1 }}
                      defaultValue={localStorage.getItem("genero")}
                      onChange={event => {
                        const { value } = event.target;
                        setValueGenero(value);
                      }}
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
                    <TextField id="outlined-basic" label="Peso inicial(atual)" variant="outlined"
                      defaultValue={localStorage.getItem("pesoInicial")}
                      onChange={event => {
                        const { value } = event.target;
                        setValuePesoInicial(value);
                      }}
                    />
                    <TextField id="outlined-basic" label="Peso Desejado" variant="outlined"
                      sx={{ marginLeft: 1 }}
                      defaultValue={localStorage.getItem("pesoFinal")}
                      onChange={event => {
                        const { value } = event.target;
                        setValuePesoFinal(value);
                      }}
                    />
                    <TextField id="outlined-basic" label="Data para alcançar" variant="outlined"
                      defaultValue={localStorage.getItem("dataFinal")}
                      onChange={event => {
                        const { value } = event.target;
                        setValueDataFinal(value);
                      }}
                    />
                  </Box>
                  <Button variant='contained' onClick={() => atualizar()}>
                    Atualizar
                  </Button>
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
