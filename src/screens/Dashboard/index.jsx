import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../../components/Header';
import Circulo from '../../components/Circulo';
import { Grid, TextField, Button } from '@mui/material';
import './index.css';
import history from '../../history';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
});

function Dashboard() {
    const [valuePeso, setValuePeso] = useState(0);
    const [pesos, setPesos] = useState([]);

    useEffect(() => {
        const url = `http://127.0.0.1:8081/api/pesos/${localStorage.getItem("id")}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPesos(data.reverse());
            });
    }, [])

    const atualizarPeso = () => {
        fetch(`http://127.0.0.1:8081/api/peso-atual`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pesoAtual: valuePeso,
                usuario: localStorage.getItem("id"),
            })
        });
        history.push("/dashboard");
        history.go();
    }

    const calculaImc = (peso) => {
        let altura = localStorage.getItem("altura");
        let imc = peso / (altura*altura) * 10**4
        return imc.toFixed(2);
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <header>
                    <Header />
                </header>
                <h1>
                    Monitoramento
                </h1>
                <div className='central'>
                    <Circulo
                        title="Peso Inicial"
                        pesoInicial={`${localStorage.getItem("pesoInicial")} kg`}
                        dataInicial={localStorage.getItem("dataInicial")}
                        color="yellow"
                    />
                    <Circulo
                        title="Peso Atual"
                        pesoInicial={`${pesos.length > 0 ? pesos[0].pesoAtual : localStorage.getItem("pesoInicial")} kg`}
                        dataInicial={pesos.length > 0 ? pesos[0].data : localStorage.getItem("dataInicial")}
                        color="green"
                    />
                    <Circulo
                        title="Peso a Alcançar"
                        pesoInicial={`${localStorage.getItem("pesoFinal")} kg`}
                        dataInicial={localStorage.getItem("dataFinal")}
                        color="aqua"
                    />
                    <Circulo
                        title="IMC atual"
                        pesoInicial={pesos.length > 0 ? calculaImc(pesos[0].pesoAtual) : calculaImc(localStorage.getItem("pesoInicial"))}
                        dataInicial={pesos.length > 0 ? pesos[0].data : localStorage.getItem("dataInicial")}
                        color="orange"
                    />
                </div>
                <div className='central'>
                    <div>
                        <h1>Atualizar Peso</h1>
                        <h3>Qual seu peso hoje?</h3>
                        <TextField
                            id="outlined-basic"
                            label="Peso"
                            variant="outlined"
                            fullWidth
                            defaultValue={valuePeso}
                            onChange={event => {
                                const { value } = event.target;
                                setValuePeso(value);
                            }}
                            sx={{ marginBottom: 2 }}
                        />
                        <Button variant='contained'
                            onClick={() => atualizarPeso()}
                        >
                            Atualizar
                        </Button>
                    </div>
                </div>
                <h1>
                    Histórico
                </h1>
                <hr></hr>
                {
                    pesos.map(peso => (
                        <div className='central-between'>
                            <div>
                                <p>Data - {peso.data}</p>
                                <p>{peso.pesoAtual} Kg</p>
                                <hr></hr>
                            </div>
                        </div>
                    ))
                }
            </div>
        </ThemeProvider>
    )
}

export default Dashboard;