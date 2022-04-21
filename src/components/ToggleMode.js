import React from 'react'
import LightImage from '../styles/background.jpeg';
import DarkImage from '../styles/backDark.avif';
import { themeDefault, themeDark } from '../styles/Style';
import colorTrigger from '../App';

function ToggleMode(currentMode) {

    if (currentMode === themeDefault) {
        colorTrigger(themeDark);
        
    } else {
        colorTrigger(themeDefault);
     
    }
}


export default ToggleMode