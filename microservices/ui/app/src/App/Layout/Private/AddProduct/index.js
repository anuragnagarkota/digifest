/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import {gql} from 'react-apollo';
import Paper from 'material-ui/Paper';
import {client} from '../../../../utils'
import Typography from 'material-ui/Typography';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  resetContainer: {
    marginTop: 0,
    padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
  },
});

function getSteps() {
  return ['Product Name', 'Product Image','Mandatory Information', 'Publish'];
}

function getStepContent(step,_this) {
  switch (step) {
    case 0:
      return <Step1 setProduct={_this.setProduct} />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 setPrice={_this.setPrice}  setRange={_this.setRange}  />;
	case 3:
      return <Step4 submit={_this.submit}  />;
    default:
      return 'Unknown step';
  }
}

class AddProduct extends React.Component {
  state = {
    activeStep: 0,
	ProductID:null,
	Price:null,
	Range:null,
	UserID:localStorage.getItem("login_id")
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  
  
  setProduct=(v)=>{
  this.setState({ProductID:v})
  this.handleNext()
  }
  
  setPrice=(v)=>{
  this.setState({Price:v})
 
  }
  
  setRange=(v)=>{
  this.setState({Range:v})
   this.handleNext()
  }

  submit=async()=>{
 let state=this.state
state=JSON.stringify(state)
try {
       let result = await client.mutate({
          mutation: gql`
          mutation($state:String!) {
             PlaceAd(state:$state)
          }
        `,
          variables: {
              state:state
           }
        })
        
        result = result.data.PlaceAd
		 
		 alert(result);
		 this.handleReset()
		 this.props.history.push("/app/view-products")
		
}
catch(e)
{
	alert("Error",e.message);
}
finally{
 
}

  }
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index,this)}</Typography>
				  <br /><br />
				  {activeStep !== steps.length - 1?
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        raised
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
				  :null}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

AddProduct.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(AddProduct);