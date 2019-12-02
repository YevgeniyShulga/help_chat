
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    console.log(value, index)
    return (
        <Typography
            style={{padding: 0}}
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0
    },
}));

export default function ScrollableTabsButtonAuto(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState();
    console.log(props);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };

    let tabPanels = props.tabs.map((elem) => {
        return (
            <TabPanel style={{padding: 0}} value={value} index={props.typePanel + elem.props.id + props.ident} key={props.typePanel + elem.props.id + props.ident}>
                {elem}
            </TabPanel>
        );

    });
    let labels = props.tabs.map(function (elem) {
        console.log(elem)
        return (
            <Tab style={{padding: 0}} value={props.typePanel + elem.props.id + props.ident} label={elem.props.name} {...a11yProps(props.typePanel + elem.props.id + props.ident)} key={props.typePanel + elem.props.name  + props.ident} />
        );
    })

    return (
        <div className={classes.root} style={{padding: 0}}>
            <AppBar position="static" color="default" style={{padding: 0}}>
                <Tabs
                    style={{padding: 0}}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {labels}
                </Tabs>
            </AppBar>

            {tabPanels}
        </div>
    );
}