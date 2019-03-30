import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },

    flexGrow: {
        flexGrow: 1,
    },
};

class App extends Component {

    render() {

        return (
            <div className={this.props.classes.root}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={this.props.classes.flexGrow}>
                            React 연습(+ material-ui)
                        </Typography>
                        <Button color="inherit" size="large" >About</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
