import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        width: '100%',
    },
    media: {
        height: 240,
    },
};

const CardComponent = (props) => {

    const classes = props.classes;

    useEffect(() => {
        console.log(props.content);
    });

    const cardActionClick = () => {
        console.log(props.content['author_url']);
        window.open(props.content['author_url'], '_blank');
    };

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={cardActionClick}>
                <CardMedia
                    className={classes.media}
                    image={props.content['thumbnail_url']}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    {Object.keys(props.content).map(key => {
                        if (key !== 'html') {
                            return (
                                <Typography component="p">
                                    {key} : {props.content[key]}
                                </Typography>
                            )
                        } else {
                            return (
                                ''
                            )
                        }
                    })}
                    {/*<Typography component="p">*/}
                    {/*Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging*/}
                    {/*across all continents except Antarctica*/}
                    {/*</Typography>*/}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

CardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);
