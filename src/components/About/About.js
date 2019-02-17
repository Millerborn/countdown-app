import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    about: {
        width: 600,
    }
  });

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
        <center>
            <div className={classes.about}>
                <h3>About Session</h3>
                <p>The goal of this page is to create a community that comes 
                    together every week to focus and meditate on making the world a better place.
                    For 2 hours a week on Sunday, starting at 6pm join us to focus on
                    all of the great things this world has to offer. Focus on what we are grateful
                    for and all of the things that are going right. Eliminate the negative and focus
                    on all of the beauty. You are incredible. Thank you for visiting.
                </p>
            </div>
        </center>
    );
  }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(About);
