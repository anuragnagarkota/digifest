import React from 'react'
import {Divider,List,  ListItem, ListItemIcon, ListItemText}  from 'material-ui';
import {Link} from 'react-router-dom'
class ListItems extends React.Component{
 

 
render(){
 
return   (
 <List style={{paddingTop:"0px"}}>
      
        <ListItem button onClick={this.props.closeDrawer}>
		<ListItemIcon>
		<i className="material-icons" style={{color:"#666"}}>note_add</i>
		</ListItemIcon>
          <Link to="/app/add-product" style={{textDecoration:"none"}}><ListItemText primary="Add Product" /></Link>
        </ListItem>
		<Divider />
		 <ListItem button onClick={this.props.closeDrawer}>
		<ListItemIcon>
		<i className="material-icons" style={{color:"#666"}}>note_add</i>
		</ListItemIcon>
           <Link to="/app/view-products" style={{textDecoration:"none"}}><ListItemText primary="View Products" /></Link>
        </ListItem>
		<Divider />
      </List>
)      
}

}


export default ListItems;