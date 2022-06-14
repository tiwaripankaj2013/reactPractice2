import React from 'react';
import '../css/ThemeSelector.css';
import { useState,useContext } from 'react';
import { ThemeContext } from '../store';
const ThemeSelector = (props) => {
const colordata = useContext(ThemeContext);
   
    const [effectiveColor,setEffectiveColor] = useState('');

    return(
        <div style={{'background' : effectiveColor}} className="theme-panel">
            <h1>Theme Selector</h1>
            <div class="theme-palette">
            {colordata && colordata.map((temp,index) => {
                 return( <span key={temp.colorname + index} className={`Palette-${temp.colorname}`} onClick = {()=> setEffectiveColor(temp.color)} style={{'background' : temp.color}}>{temp.colorlabel}</span>)
            }
            )}
            </div>
        </div>
        
    )
}

export default ThemeSelector;