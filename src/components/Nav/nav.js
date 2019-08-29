import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from './home_symbol.jpeg'


const styles = theme => ({
    root: {
      flexGrow: 1,
      width: 'flex',
    },
    homeImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    nav: {
      backgroundColor: '#00FA9A',
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
      fontSize: 25,
    },
});

class Nav extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
              <AppBar className={classes.nav} position="static">
                <Toolbar>
                  <Typography color="inherit" variant="h6" className={classes.title}>
                    Small Steps to Mindfulness
                  </Typography>
                  <img variant="h6" className={classes.homeImage} src={Image} opacity="0.2" alt="Mandala"/>
                  <Button color="inherit">Who We Are</Button>
                  <Button color="inherit">Learn More</Button>
                </Toolbar>
              </AppBar>
            </div>
        )
    }
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Nav);
