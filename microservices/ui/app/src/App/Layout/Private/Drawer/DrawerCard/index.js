import React from 'react'
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const styles = theme => ({
  card: {
    backgroundColor:theme.palette.primary1Color,
	width:300
  },
   text: {
    color: "white",
  },
  avatar:{
  background:"#C0C0C0",
  color:"#fff",
   padding: 5
  },
  bigAvatar: {
    width: 60,
    height: 60,
  }
  
});
class DrawerCard extends React.Component{

render(){
const classes = this.props.classes;
return(

<Card    className={classes.card} >
          <CardHeader 
            avatar={
              <Avatar className={classNames(classes.avatar, classes.bigAvatar)}>
			 A
			  </Avatar>
            }
            
          />
		  <CardContent style={{marginTop:0,paddingTop:0}}>
         <Typography type="body1" className={classes.text}>
           Anurag Nagar
          </Typography>
		  <Typography type="body1" className={classes.text}>
            anuragnagarkota@gmail.com
          </Typography>
          </CardContent>
         
          
        </Card> 
)
}
}		
DrawerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DrawerCard);