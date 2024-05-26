import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmployeeList from './components/EmployeeList';


function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Benefits Management
          </Typography>
        </Toolbar>
      </AppBar>
      <EmployeeList />
    </Box>
  );
}

export default App;
