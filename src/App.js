import React, {useState} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {Search} from '@material-ui/icons';

import CardComponent from './component/CardComponent';


const domainItems = [
    {
        value: 'test1',
        label: '유튜브',
    },
    {
        value: 'test2',
        label: '인스타그램',
    },
];


const App = (props) => {

    const [selectDomain, setSelectDomain] = useState('test1');
    const [searchText, setSearchText] = useState('');


    const changeSelectDomain = (event) => {
        console.log(event.target.value);
        setSelectDomain(event.target.value);
    };

    const clickSearch = (event) => {
        if (searchText) {
            searchOembed();
        }
    };

    const searchOembed = (event) => {
        if (searchText) {
            console.log('검색 시작!');
        }
    };


    return (
        <div style={{padding: '20px'}}>
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Paper style={{padding: '10px', display: 'flex', alignItems: 'center', minWidth: '360px'}}>
                        <TextField
                            select
                            variant="outlined"
                            label="검색 도메인 선택"
                            value={selectDomain}
                            onChange={changeSelectDomain}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"
                                                                style={{width: '100%'}}>도메인</InputAdornment>,
                            }}
                            style={{width: '100%'}}
                        >
                            {domainItems.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{padding: '10px', display: 'flex', alignItems: 'center', minWidth: '360px'}}>
                        <InputBase placeholder="Search.." value={searchText}
                                   onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => e.keyCode == 13 ? searchOembed() : ''}
                                   style={{flexGrow: 2}}/>
                        <IconButton aria-label="Search" onClick={clickSearch}>
                            <Search/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{padding: '10px'}}>
                        <CardComponent/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{padding: '10px'}}>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{padding: '10px'}}>xs=4</Paper>
                </Grid>
            </Grid>
        </div>
    );

};

export default (App);
