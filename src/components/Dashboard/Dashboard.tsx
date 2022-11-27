import { Box, cardClasses, Grid } from '@mui/material';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import InfoPage from '../InfoPage/InfoPage';
import Abilities from '../Abilities/Abilities';
import { useEffect } from 'react';
import './Dashboard.css';
import logo from '../../assets/logo.png';
import myJson from '../../Models/cards.json';
import BasicModal from '../BasicModal/BasicModal';
const Dashboard = () => {
  const cards = myJson.cards;

  return (
    <div className="container">
      <img src={logo} className="logo" />
      <div className="row h-100">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 8, sm: 8, md: 16 }}
          >
            {cards.map((card, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <EmployeeCard key={card.id} card={card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
