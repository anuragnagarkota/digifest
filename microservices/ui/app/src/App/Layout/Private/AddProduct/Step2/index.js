import React from 'react'
import {Button} from 'material-ui' 
 

export default class Step2 extends React.Component {
 
render(){
    return (
        <div>
	 
		<p>Choose a pic of your product</p><br />
		<Button raised color="accent">
          Select
          <i className="material-icons">image</i>
        </Button>
	
		<br /><br />	  
        </div>

    )
	}
}
