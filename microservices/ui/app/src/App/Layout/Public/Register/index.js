import React from 'react'
import {Link} from 'react-router-dom'
import {Typography ,TextField,Button,withStyles,Grid,Paper} from 'material-ui';
import PropTypes from 'prop-types';
import Aadhaar from './aadhaar.png'
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 32,
    paddingBottom: 32,
    marginTop: theme.spacing.unit * 3,
  }),
   bigAvatar: {
    width: 60,
    height: 60,
  } 
});

class Register extends React.Component{

 render(){
 
 const classes=this.props.classes
    return (
          <div style={{
  "background":"#eee",
  "display": "flex",
  "justifyContent": "center",
  "flexDirection": "column",
  "textAlign": "center",
  "height":"100%"}}>
  
   <Grid container justify="center" spacing={12} >
       <Grid item xs={12} sm={4}>
	   &nbsp;
	   </Grid>
	   <Grid item xs={11} sm={4}>
  
     <Paper className={classes.root} elevation={4}>
	<center>
 
	{/*<i className="material-icons" style={{fontSize:"30px",color:"#666"}}>touch_app</i> */}
	<img src={Aadhaar} width={150} />
 
	<br />
	  <form onSubmit={this.login}>
   <i className="material-icons">account_circle</i>&nbsp;&nbsp;<TextField onChange={this.setUsername} style={{width:200}}
     label="Aadhaar Card No"  
    /><br />
    <br />
   <i className="material-icons">lock</i>&nbsp;&nbsp;<TextField style={{width:200}}  type="password"
     label="Password"  
    /><br /><br />
	  <Button type="submit" raised color="primary" style={{paddingLeft:40,paddingRight:40}}>Login</Button> 
	  </form>
	  </center>
	  <br /><br />
	  <Link to="forgot-password" style={{float:"left"}} >
	  <Typography type="body1" gutterBottom>
	  Forgot Password
	  </Typography>
	  </Link>
	  <Link to="login" style={{float:"right"}} >
	  <Typography type="body1" gutterBottom>
	  Login
	  </Typography>
	  
	  
	  </Link>
 </Paper>
	  </Grid>
	<Grid item xs={12} sm={4}>
	   &nbsp;
	   </Grid>
	   </Grid>

	  </div>
 

    )
	}
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
