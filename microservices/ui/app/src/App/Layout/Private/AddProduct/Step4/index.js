import React from 'react'
import {Button} from 'material-ui' 
import {client} from '../../../../../utils'
import {SelectBox} from '../../../../../utils'

export default class Step4 extends React.Component {
 
render(){
    return (
        <div>
	 
		<p>Ready to publish</p><br />
		 <Button raised color="accent" onClick={this.props.submit}>
          Publish
          <i className="material-icons">publish</i>
        </Button>
	
		<br /><br />	  
        </div>

    )
	}
}
