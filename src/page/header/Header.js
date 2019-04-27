import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'

import {withStyles} from '@material-ui/core/styles';
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
        cursor: 'pointer'
    },
};

// hooks 예제
const Header = (props) => {
    const [headerMsg, setHeaderMsg] = useState('React 연습(Header 는 Hooks 로 작성)');

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.(Header)');
        console.log(headerMsg);
    });

    const onClickHandler = () => {
        // setHeaderMsg('');
        props.history.push('/');
    };

    return (
        <div className={props.classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" className={props.classes.flexGrow}
                                onClick={onClickHandler}>
                        {headerMsg}
                    </Typography>
                    <Button color="inherit" size="large" onClick={() => {
                        props.history.push('/about')
                    }}>About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(withStyles(styles)(Header));
