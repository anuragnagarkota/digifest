import React from 'react'
import Grid from 'material-ui/Grid';
import Card from './Card'
import Wheat from './img/Wheat.jpg';
import Rice from './img/Rice.jpg';
export default(props) => {
    return (
        <Grid container justify="center" spacing={16}>
  <Grid item sm={4} xs={12}>
		<Card data={{s_name:"W",name:"Wheat",img:Wheat,title:"Wheat",subheader:"Pusa Gold"}} />
</Grid>
  <Grid item sm={4} xs={12}>
		<Card data={{s_name:"R",name:"Rice",img:Rice,title:"Rice",subheader:"Basmati"}} />
</Grid>
  
 
        </Grid>

    )
}


