import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends Component {

    render() {
        return (
           <div style={{padding : '20px'}}>
               나와라!
               <Grid container spacing={16}>
                   <Grid item xs={12}>
                       <Paper style={{padding : '10px'}}>xs=12</Paper>
                   </Grid>
                   <Grid item xs={6}>
                       <Paper style={{padding : '10px'}}>xs=6</Paper>
                   </Grid>
                   <Grid item xs={6}>
                       <Paper style={{padding : '10px'}}>xs=6</Paper>
                   </Grid>
               </Grid>
           </div>
        );
    }

}

// App.propTypes = {
//   classes : PropTypes.object.isRequired,
// };


export default (App);
