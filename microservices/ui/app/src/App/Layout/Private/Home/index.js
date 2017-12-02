import React from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider';
export default(props) => {
 
    return (
        <div>
          {/*  <center><h2><i style={{color:"#666"}} className="material-icons">g_translate</i></h2></center>*/}
			 <List>
        <ListItem button onClick={()=>props.history.push("/app/add-product")}>
          
          <ListItemText primary="English" />
        <ListItemIcon>
           <i className="material-icons">arrow_forward</i>
          </ListItemIcon>
		</ListItem>
		 <Divider />
		<ListItem button onClick={()=>props.history.push("/app/add-product")}>
           
          <ListItemText primary="हिंदी" />
		   <ListItemIcon>
           <i className="material-icons">arrow_forward</i>
          </ListItemIcon>
        </ListItem>
		 <Divider />
		<ListItem button onClick={()=>props.history.push("/app/add-product")}>
            
          <ListItemText primary="தமிழ்" />
		   <ListItemIcon>
           <i className="material-icons">arrow_forward</i>
          </ListItemIcon>
        </ListItem>
		</List>

        </div>

    )
}
