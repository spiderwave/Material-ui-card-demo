import React from 'react';
import CoffeCard from './CoffeCard';
import { Grid } from '@material-ui/core';

import photo from './Images/alka.png';

const Content = () => {
     return (
         <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
                <CoffeCard title="Alkasol" subtitle="Rs.4,00" avatarSrc={photo} imgSrc={photo} description="About: This medicine is really helpful for urine infection. Take this medicine under doctors prescription"/>
                
             </Grid>
             <Grid item xs={12} sm={4}>
                 <CoffeCard/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <CoffeCard/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <CoffeCard/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <CoffeCard/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <CoffeCard/>
                 </Grid>
              
         </Grid>
     
     );
};
export default Content;