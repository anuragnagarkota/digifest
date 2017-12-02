import React from 'react'
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
export default class Step3 extends React.Component {
 state = {
    range:0,
	price:null
  };
 handleChange = (event)=>{
    this.setState({ range: event.target.value });
	this.props.setRange(event.target.value);
  };
 
 handlePrice= (event)=>{
    this.setState({ price: event.target.value });
	this.props.setPrice(event.target.value);
  };
 
render(){
let r_array=[{value:'upto 10 km',text:'upto 10 km'},{value:'upto 50 km',text:'upto 50 km'},{value:'upto 100 km',text:'upto 100 km'},{value:'more than 100 km',text:'more than 100 km'}] 
 return (
        <div>
		  
		  
		   <FormControlLabel
          control={
            <Checkbox
              
              value="checkedA"
            />
          }
          label="Organic"
        />
      <br />
		  
		<TextField
          id="price"
          label="Price"
           style={{width:300}}
           onChange={this.handlePrice}	
          margin="normal"
        />
		 
		 <br /><br /><br />
		 <Select
          autoWidth   
           style={{width:300}}
          value={this.state.range} 
 onChange={this.handleChange}		  
          >
            <MenuItem value={0} style={{width:300}}>
              <em>Select Delivery Range</em>
            </MenuItem>
			{
				r_array.map((n)=>{
					return <MenuItem value={n.value}>{n.text}</MenuItem>
				})
			}
            
            
          </Select>
		 
	
		<br /><br />	  
        </div>

    )
	}
}
