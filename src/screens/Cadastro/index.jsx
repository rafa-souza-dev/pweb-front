import React, { useState } from 'react';
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

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

function Cadastro() {
  const [valueNome, setValueNome] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueAltura, setValueAltura] = useState("");
  const [valueGenero, setValueGenero] = useState("");
  const [valuePesoInicial, setValuePesoInicial] = useState("");
  const [valuePesoFinal, setValuePesoFinal] = useState("");
  const [valueDataFinal, setValueDataFinal] = useState("");

  const cadastrar = () => {
    fetch(`http://127.0.0.1:8081/api/usuario`, {
      method: "POST",
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
    history.push("/");
    history.go();
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
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
                    <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                      defaultValue={valueNome}
                      onChange={event => {
                        const { value } = event.target;
                        setValueNome(value);
                      }} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
                      defaultValue={valueEmail}
                      onChange={event => {
                        const { value } = event.target;
                        setValueEmail(value);
                      }} />
                    <TextField id="outlined-basic" label="Altura (Cm)" variant="outlined"
                      defaultValue={valueAltura}
                      onChange={event => {
                        const { value } = event.target;
                        setValueAltura(value);
                      }} />
                    <TextField id="outlined-basic" label="Gênero/Sexo (MASCULINO/FEMININO)" variant="outlined"
                      sx={{ marginLeft: 1 }}
                      defaultValue={valueGenero}
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
                      defaultValue={valuePesoInicial}
                      onChange={event => {
                        const { value } = event.target;
                        setValuePesoInicial(value);
                      }} />
                    <TextField id="outlined-basic" label="Peso Desejado" variant="outlined"
                      sx={{ marginLeft: 1 }}
                      defaultValue={valuePesoFinal}
                      onChange={event => {
                        const { value } = event.target;
                        setValuePesoFinal(value);
                      }}
                    />
                    <TextField id="outlined-basic" label="Data para alcançar" variant="outlined" 
                    defaultValue={valueDataFinal}
                    onChange={event => {
                      const { value } = event.target;
                      setValueDataFinal(value);
                    }} />
                  </Box>
                  <Button variant='contained' onClick={() => cadastrar()} >
                    Finalizar
                  </Button>
                  <Link to="/"
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
