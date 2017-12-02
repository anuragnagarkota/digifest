import React from 'react'
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import {gql,graphql} from 'react-apollo';

export class Step1 extends React.Component {
 state = {
    value:0
  };
 handleChange = (event)=>{
    this.setState({ value: event.target.value });
	this.props.setProduct(event.target.value);
  };
 
  
render(){
if(this.props.data.loading)
          {
			  
              return <div>Loading...</div>
          }   
		   
		  
         if(this.props.data.error){
            return <div>Network error</div>
         }
        let data= JSON.parse(this.props.data.Product)

    return (
        <div>
	 
	 
			  
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
				data.map((n)=>{
					return <MenuItem value={n.ProductID}>{n.Product}</MenuItem>
				})
			}
            
            
          </Select>
 
           
        </div>

    )
	}
}


const gqlquery = gql `
query{
  Product
}
`
const Step1HCOMP = graphql(gqlquery, {

    options: () => ({
   fetchPolicy: 'cache-first'
        
    })
})(Step1)

export default Step1HCOMP