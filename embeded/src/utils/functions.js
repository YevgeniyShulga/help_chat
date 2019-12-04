import React from 'react'
import {availableSites} from "../constants/availableSites";
import {parserConfiguration} from "../constants/parserConfig";
import Range from "../components/Filters/Range";
import MenuButton from "../components/Filters/MenuButton";

export const getActiveSite = () => {
    let host = window.location.host;
    let current = -1;
    console.log('setSite')
    availableSites.map((elem, index) => {
        if (host.indexOf(elem.hostMarker) > -1) {
            current = index;
        }
    });
    let siteName = availableSites[current].name
    return parserConfiguration[siteName];
}

export const getFilter = (filterName, callback = ()=>{}) => {
    switch (filterName) {
        case 'age':
            return <Range updateState={callback}/>

        case 'show_more':
            return <MenuButton title="фильтры" additionalStyles={{width: 150}}/>
    }
}

export const getCallback = (elem, callbacks) => {
    switch (elem) {
        case 'age': return callbacks.setAgeRange;
    }
}