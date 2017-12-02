import React from 'react'
  
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
 

export default class SelectBox extends React.Component {
 state = {
    value:0
  };
 handleChange = (event)=>{
    this.setState({ value: event.target.value });
  };
render(){
    return (
        <div>
		<br />
		<br />
		
		 <Select
          autoWidth   
           style={{width:300}}
          value={this.state.value} 
 onChange={this.handleChange}		  
          >
            <MenuItem value={0} style={{width:300}}>
              <em>Select {this.props.product}</em>
            </MenuItem>
			{
				this.props.array.map((n)=>{
					return <MenuItem value={n.value}>{n.text}</MenuItem>
				})
			}
            
            
          </Select>
	
		<br /><br />	  
        </div>

    )
	}
}
