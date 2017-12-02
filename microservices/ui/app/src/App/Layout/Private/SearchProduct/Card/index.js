import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import Button from 'material-ui/Button';

const styles = theme => ({
  card: {
    maxWidth: '95%',
  },
  media: {
    height: 60,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[900],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class ViewProduct extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
 
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar   className={classes.avatar}>
                <img src={this.props.data.img} />
              </Avatar>
            }
             
            title={this.props.data.title}
            subheader={this.props.data.subheader}
          />
           
          <CardContent>
             
          </CardContent>
          <CardActions disableActionSpacing>
            <Typography type="subheading" gutterBottom align="right">
        Organic
      </Typography>
            <div className={classes.flexGrow} />
             
               <Button raised color="primary"  >
        View  
      </Button>
           
          </CardActions>
          
        </Card>
      </div>
    );
  }
}

ViewProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewProduct);