// ** Type Imports
import { PaletteMode } from '@mui/material'
import { ThemeColor } from 'src/@core/layouts/types'

const DefaultPalette = (mode: PaletteMode, themeColor: ThemeColor) => {
  // ** Vars
  const lightColor = '52, 64, 63'
  const darkColor = '227, 250, 248'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const primaryGradient = () => {
    if (themeColor === 'primary') {
      return '#4DB6AC'
    } else if (themeColor === 'secondary') {
      return '#4DB6AC'
    } else if (themeColor === 'success') {
      return '#93DD5C'
    } else if (themeColor === 'error') {
      return '#FF8C90'
    } else if (themeColor === 'warning') {
      return '#FFCF5C'
    } else {
      return '#6ACDFF'
    }
  }

  return {
    customColors: {
      main: mainColor,
      primaryGradient: primaryGradient(),
      tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
    },
    common: {
      black: '#000',
      white: '#FFF'
    },
    mode: mode,
    primary: {
      light: '#80CBC4',
      main: '#26A69A',
      dark: '#00796B',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#80CBC4',
      main: '#26A69A',
      dark: '#00796B',
      contrastText: '#FFF'
    },
    success: {
      light: '#6AD01F',
      main: '#56CA00',
      dark: '#4CB200',
      contrastText: '#FFF'
    },
    error: {
      light: '#FF6166',
      main: '#FF4C51',
      dark: '#E04347',
      contrastText: '#FFF'
    },
    warning: {
      light: '#FFCA64',
      main: '#FFB400',
      dark: '#E09E00',
      contrastText: '#FFF'
    },
    info: {
      light: '#32BAFF',
      main: '#16B1FF',
      dark: '#139CE0',
      contrastText: '#FFF'
    },
    text: {
      primary: `rgba(${mainColor}, 0.90)`,
      secondary: `rgba(${mainColor}, 0.72)`,
      disabled: `rgba(${mainColor}, 0.40)`
    },
    divider: `rgba(${mainColor}, 0.11)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#2d4a44',
      default: mode === 'light' ? '#f7fcfb' : '#203631'
    },
    action: {
      active: `rgba(${mainColor}, 0.55)`,
      hover: `rgba(${mainColor}, 0.05)`,
      selected: `rgba(${mainColor}, 0.10)`,
      disabled: `rgba(${mainColor}, 0.4)`,
      disabledBackground: `rgba(${mainColor}, 0.20)`,
      focus: `rgba(${mainColor}, 0.14)`
    }
  }
}

export default DefaultPalette
