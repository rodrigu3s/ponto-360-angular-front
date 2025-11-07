import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  "#e4f5f2",
      100: "#d2f0ea",
      200: "#a9e7db",
      300: "#72d7c5",
      400: "#4fc8b6",
      500: "#34baab", // color4 (principal)
      600: "#459a96", // color3 (hover)
      700: "#466067", // color2 (active)
      800: "#3d5257",
      900: "#2c3a3d"
    },
    surface: {
      0:   "#ffffff",
      50:  "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#484450", // color1 (base escura)
      900: "#2b2b2b"
    },
    color: {
      text: "#484450",        // color1
      textMuted: "#c4c8c5",   // color5
      border: "#c4c8c5"       // color5
    }
  },
  states: {
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.500}'
    }
  }
});

export default MyPreset;
