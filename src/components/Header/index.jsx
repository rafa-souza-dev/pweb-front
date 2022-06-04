import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Vector from '../../assets/vector.png';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

export default function ButtonAppBar() {
  const [isLogged, setLogged] = React.useState(true)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ paddingInlineStart: 4, paddingInlineEnd: 4, }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <img className="vector" src={Vector} alt="person" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Controle seu peso
            </Typography>
            {!isLogged ?
              <>
                <Link to="/"
                  style={{ textDecoration: 'none', color: "#fff" }}
                >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    DashBoard
                  </Typography>
                </Link>
                <Link to="/perfil"
                  style={{ textDecoration: 'none', color: "#fff" }}
                >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
                    Atualizar dados
                  </Typography>
                </Link>
              </>
              :
              <Link to="/"
                style={{ textDecoration: 'none', color: "#fff" }}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
                  Login/Registrar
                </Typography>
              </Link>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
