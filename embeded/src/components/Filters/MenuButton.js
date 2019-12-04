import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Grid} from "@material-ui/core";
import TableExample from "../examples/TableExample";

export default function MenuButtons(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="outlined" color="primary" style={props.additionalStyles}>
                {props.title}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Grid container xl={12} xs={12} md={12} lg={12}>
                    <TableExample/>
                </Grid>
            </Menu>
        </div>
    );
}