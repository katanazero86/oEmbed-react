import React, {useState, useReducer} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {Search} from '@material-ui/icons';

import CardComponent from './component/CardComponent';

// import axios from 'axios';

// state manage
import {connect} from 'react-redux';
import * as actions from './store/actions';


const domainItems = [
    {
        value: 'youtube',
        label: '유튜브',
    },
    {
        value: 'instagram',
        label: '인스타그램',
    },
    {
        value: 'vimeo',
        label: '비메오',
    },
];


const initialState = {
    // youtubeEndPoint: 'https://www.youtube.com/oembed?url=',
    youtubeEndPoint: 'http://noembed.com/embed?url=',
    instagramEndPoint: 'https://api.instagram.com/oembed?url=',
    vimeoEndPoint: 'https://vimeo.com/api/oembed.json?url=',
};

const appReducer = (state, action) => {
    switch (action.type) {
        default :
            return state;
    }
};


const App = (props) => {

    const [selectDomain, setSelectDomain] = useState('youtube');
    const [searchText, setSearchText] = useState('');
    const [state, dispatch] = useReducer(appReducer, initialState);

    const changeSelectDomain = (event) => {
        // console.log(event.target.value);
        dispatch({type: 'test'});
        setSelectDomain(event.target.value);
    };

    const clickSearch = (event) => {
        if (searchText) {
            searchOembed();
        }
    };

    // let contentItems = [];

    const searchOembed = (event) => {

        // https://www.youtube.com/watch?v=Ck7Ov6YxQPs&list=RDGMEMXdNDEg4wQ96My0DhjI-cIgVMk8e2PBUw45E&index=4
        // https://vimeo.com/219312157
        // https://www.instagram.com/p/BwifsZmJ_tD/


        if (searchText) {
            let endPoint = '';
            switch (selectDomain) {
                case 'youtube' :
                    endPoint = `${state.youtubeEndPoint}${searchText}&format=json`;
                    break;
                case 'instagram':
                    endPoint = `${state.instagramEndPoint}${searchText}`;
                    break;
                case 'vimeo' :
                    endPoint = `${state.vimeoEndPoint}${searchText}`;
                    break;
                default :
                    break;
            }

            if (endPoint) {

                props.getOembedContent(endPoint);

                // const result = await axios.get(endPoint);
                // if (result.status !== 200) {
                //     console.log(result);
                // } else if (result.status === 200) {
                //     // console.log(result);
                //     await props.getOembedContents();
                //     const oEmbedContents = props.oEmbedContents;
                //     oEmbedContents.push(result.data);
                //     await props.setOembedContent(oEmbedContents);
                //
                // }
            }

        }
    };


    return (
        <div style={{padding: '20px'}}>
            <Grid container spacing={16} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <div style={{padding: '5px', display: 'flex', alignItems: 'center'}}>
                        <TextField
                            select
                            variant="outlined"
                            margin="dense"
                            label="검색 도메인 선택"
                            value={selectDomain}
                            onChange={changeSelectDomain}
                            style={{width: '100%'}}
                        >
                            {domainItems.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div style={{padding: '5px', display: 'flex', alignItems: 'center'}}>
                        <TextField
                            label="Search URL.."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            autoFocus
                            fullWidth
                            margin="dense"
                            onKeyUp={(e) => e.keyCode === 13 ? searchOembed() : ''}

                        />
                        <IconButton aria-label="Search" onClick={clickSearch}>
                            <Search/>
                        </IconButton>
                    </div>
                </Grid>
                {props.loading
                    ? <p>Loading...</p>
                    : props.error
                        ? <p>Error, try again</p>
                        : <p>{props.requestURL}</p>
                }


                    {props.oEmbedContents.map((content, index) => {
                        return (
                            <Grid item xs={12} sm={6} key={index}>
                                <Paper style={{padding: '10px'}}>
                                    <CardComponent content={content}/>
                                </Paper>
                            </Grid>
                                )
                        })
                    }
            </Grid>
        </div>
    );

};


// store 안의 state 값을 props 로 연결
const mapStateToProps = (state) => {
    return {
        ...state.oEmbedStore
    };
};

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => {
    return {
        getOembedContent:  (requestURL) => {
             dispatch(actions.getOembedContent(requestURL));
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
