import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    flexGrow: {
        flexGrow: 1,
    },
};


class Footer extends Component {
    render() {
        return (
            <div>
                <AppBar position="absolute" color="secondary" style={{bottom: 0, top: 'auto'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={this.props.classes.flexGrow}>
                            footer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Footer));