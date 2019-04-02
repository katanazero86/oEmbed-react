import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// state manage
import {connect} from 'react-redux';
import * as actions from '../actions';


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
                            스토어 : {this.props.text}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


// store 안의 state 값을 props 로 연결
const mapStateToProps = (state) => {
    console.log(state);
    return {
        text: state.test.storeTest,
    };
};

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => {
    return {
        handleTest: () => {
            dispatch(actions.test())
        },
    }
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Footer)));