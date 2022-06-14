import { createContext } from "react";

  const colorPalette = [
      {
          colorname: 'pink',
          colorlabel: 'Pink',
          color: '#FFC0CB'
      },
      {
          colorname: 'purple',
          colorlabel: 'purple',
          color: '#A020F0'
      },
      {
          colorname: 'green',
          colorlabel: 'green',
          color: '#00FF00'
      }
  ];

 const ThemeContext = createContext(null);

  export {colorPalette,ThemeContext}
