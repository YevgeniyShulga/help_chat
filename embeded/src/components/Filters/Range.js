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
            <span id="range-slider" style={{marginBottom: '0px !important'}}>
                Выберите возвраст
            </span>
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