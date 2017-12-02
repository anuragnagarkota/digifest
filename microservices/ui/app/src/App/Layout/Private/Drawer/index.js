import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import DrawerCard from './DrawerCard';
import ListItems from './ListItems';
import Menu, { MenuItem } from 'material-ui/Menu';
import {Link} from 'react-router-dom'
 
const styles = theme => ({
  primary:{
  backgroundColor:theme.palette.primary1Color,
  marginTop:0
  } 
  
});
class DrawerComp extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
	left: false,
	 anchorEl: null,
    open: false,
  };

  }
  
  logout=()=>{
	localStorage.removeItem("login_id");
	localStorage.removeItem("Name");
	localStorage.removeItem("Class");
	localStorage.removeItem("Photo");
	window.location=("/")
  }
    toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
	  dialog:false
    });
  };
  closeDrawer=()=>{
  this.setState({left:false});
  }
  
   handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  }; 
render(){
   const classes = this.props.classes;
return(
<div  className="screen_only">
 <AppBar position="fixed" className={classes.primary}>
        <Toolbar style={{justifyContent:"center"}}>
		
          <IconButton style={{position:"absolute",left:10}} onClick={this.toggleDrawer('left', true)} color="contrast" aria-label="Menu">
            <i className="material-icons">menu</i>
          </IconButton>
          <Typography style={{position:"absolute",left:60,cursor:"pointer"}}  onClick={this.toggleDrawer('left', true)}  type="title" color="inherit">
            
          </Typography>
		 
        {/*<i className="material-icons">touch_app</i> */}
		  <Typography style={{color:"#fff",fontFamily:'cursive'}} type="headline" >
            EKisaan
          </Typography>
	  
	  <i onClick={this.handleClick} className="material-icons" style={{position:"absolute",right:20,cursor:"pointer"}}>more_vert</i>
      
	  </Toolbar>
      </AppBar>

<Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
	<AppBar
   title="Resonance"
    
	
	 
  />

<DrawerCard /> 
<ListItems closeDrawer={this.closeDrawer}   />
		
        </Drawer>
		  <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
	 
        >
          
          <MenuItem onClick={this.handleRequestClose}>
		  <i className="material-icons" style={{color:"#999"}}>account_circle</i>&nbsp;&nbsp;
		  My Account</MenuItem>
		  
          <MenuItem onClick={this.logout}>
		  <i className="material-icons" style={{color:"#999"}}>power_settings_new</i>&nbsp;&nbsp;
		  Logout</MenuItem>
        </Menu>
		

		</div>
		)
}
}
DrawerComp.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DrawerComp);