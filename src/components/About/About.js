import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    opacity: 0.7,
  };
}

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    padding: 10,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  findOut: {
    color: 'black',
  }
});

class About extends React.Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen} className={classes.findOut}>Find Out Who we are</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Our Mission
            </Typography>
            <Typography variant="subtitle1">
                The goal of this page is to create a community that comes 
                together every week to focus and meditate on making the world a better place.
                For 2 hours a week on Sunday, starting at 6pm join us to focus on
                all of the great things this world has to offer. Focus on what we are grateful
                for and all of the things that are going right. Eliminate the negative and focus
                on all of the beauty. You are incredible. Thank you for visiting.
            </Typography>
            <div>
              <p>Background Image:</p> 
                <a href="https://pixabay.com/photos/china-buddha-statues-religion-1177009/"> Pixabay Link</a>
              <p>Image:</p>
                <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Om_Mani_Padme_Hum_mantra.svg/1024px-Om_Mani_Padme_Hum_mantra.svg.png"> Om Mani Padme Hum Text Image</a>
              <p>Chant:</p>
                <a href="https://www.youtube.com/watch?v=iG_lNuNUVd4"> Om Mani Padme Hum Chant</a>
            </div>
          </div>
        </Modal>
      </div>
      // <div>
      //   <Button
      //     aria-owns={open ? 'simple-popper' : undefined}
      //     aria-haspopup="true"
      //     variant="contained"
      //     onClick={this.handleClick}
      //     className={classes.button}
      //   >
      //     Who we are
      //   </Button>
      //   <Modal
      //     id="simple-popper"
      //     open={open}
      //     anchorEl={anchorEl}
      //     onClose={this.handleClose}
      //     anchorOrigin={{
      //       vertical: 'bottom',
      //       horizontal: 'center',
      //     }}
      //     transformOrigin={{
      //       vertical: 'top',
      //       horizontal: 'center',
      //     }}
      //   >
      //     <div>
            // <Typography className="popover">
            //     The goal of this page is to create a community that comes 
            //     together every week to focus and meditate on making the world a better place.
            //     For 2 hours a week on Sunday, starting at 6pm join us to focus on
            //     all of the great things this world has to offer. Focus on what we are grateful
            //     for and all of the things that are going right. Eliminate the negative and focus
            //     on all of the beauty. You are incredible. Thank you for visiting.
            // </Typography>
            // <div>
            //   <p>Background Image:</p> 
            //     <a href="https://pixabay.com/photos/china-buddha-statues-religion-1177009/"> Pixabay Link</a>
            //   <p>Image:</p>
            //     <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Om_Mani_Padme_Hum_mantra.svg/1024px-Om_Mani_Padme_Hum_mantra.svg.png"> Om Mani Padme Hum Text Image</a>
            //   <p>Chant:</p>
            //     <a href="https://www.youtube.com/watch?v=iG_lNuNUVd4"> Om Mani Padme Hum Chant</a>
            // </div>
      //     </div>
      //   </Modal>
      // </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
