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
import { Context } from '../../context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

export default function ButtonAppBar() {
  const { authenticated, handleLogout } = React.useContext(Context);

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
            {authenticated ?
              <>
                <Box sx={{ flexGrow: 60 }} />
                <Link to="/dashboard"
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2, cursor: "pointer" }}
                  onClick={() => handleLogout()}
                >
                  Sair
                </Typography>
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
