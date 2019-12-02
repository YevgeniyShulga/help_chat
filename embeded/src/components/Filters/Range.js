import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 150,
    },
});

function valuetext(value) {
    return `${value} лет`;
}

export default function Range(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);
    props.updateState(value);

    const handleChange = (event, newValue) => {
        props.updateState(newValue)
        console.log(newValue)
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Выберите возвраст
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}