import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class About extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
        >
          Who Are We?
        </Button>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            The goal of this page is to create a community that comes 
            together every week to focus and meditate on making the world a better place.
            For 2 hours a week on Sunday, starting at 6pm join us to focus on
            all of the great things this world has to offer. Focus on what we are grateful
            for and all of the things that are going right. Eliminate the negative and focus
            on all of the beauty. You are incredible. Thank you for visiting.
          </Typography>
        </Popover>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);


// import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// const styles = theme => ({
//     about: {
//         width: 600,
//     }
//   });

// class About extends Component {
//   render() {

//     SimplePopover = () => {
//       const classes = useStyles();
//       const [anchorEl, setAnchorEl] = React.useState(null);
//     }
    
//     handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     }

//     handleOpen = () => {

//     }
  
//     handleClose = () => {
//       setAnchorEl(null);
//     }
//     const open = Boolean(anchorEl);
//     }
//     const { classes } = this.props;
//     return (
//         <center>
//         <Button variant="contained" onClick={this.handleClick}>
//           Who Are We?
//         </Button>
//         <Popover
//           open={this.handleOpen}
//           onClose={this.handleClose}
//         >
          // <Typography className={classes.typography}>
          //   <p>The goal of this page is to create a community that comes 
          //       together every week to focus and meditate on making the world a better place.
          //       For 2 hours a week on Sunday, starting at 6pm join us to focus on
          //       all of the great things this world has to offer. Focus on what we are grateful
          //       for and all of the things that are going right. Eliminate the negative and focus
          //       on all of the beauty. You are incredible. Thank you for visiting.
          //   </p>
//           </Typography>
//         </Popover>
//         </center>
//     );
//   }
// }

// About.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

// export default withStyles(styles)(About);
