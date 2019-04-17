import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// state manage
import {connect} from 'react-redux';
import * as actions from '../store/actions';


const styles = {
    textField: {
        width: 200,
    },
    flexGrow: {
        flexGrow: 1,
    },
};


class Footer extends Component {

    state = {
        name: '',
        age: 100,
    };

    handleChange = (event) => {
        // console.log(event.target.value);
        // this.setState({name: event.target.value});
        console.log(event.target.value);
        event.persist();
        this.setState((prevState, props) => {
           return {
               name : event.target.value
           }
        });
    };

    footerStoreChange = () => {
        this.props.setFooterMsg('setFooterMsg');
    };

    render() {
        return (
            <div>
                <AppBar position="absolute" color="secondary" style={{bottom: 0, top: 'auto'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={this.props.classes.flexGrow}>
                            Footer - {this.props.footerMsg}
                        </Typography>
                        <TextField
                            id="standard-name"
                            label="상태값 예제"
                            className={this.props.classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        {this.state.name}
                        <Button variant="contained" onClick={this.footerStoreChange}>
                            footerStore 값 변경
                        </Button>
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
        footerMsg: state.footerStore.footerMsg,
    };
};

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => {
    return {
        getFooterMsg: () => {
            dispatch(actions.getFooterMsg());
        },
        setFooterMsg: (msg) => {
            dispatch(actions.setFooterMsg({msg}));
        }
    }
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Footer)));
