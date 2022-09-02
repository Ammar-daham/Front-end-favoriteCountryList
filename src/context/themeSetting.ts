import { AppTheme } from './AppTheme'

const bodyStyle: AppTheme = {
  dark: {
    background: '#37474F',
    color: 'white',
  },
  light: {
    background: '#F5F5F5',
    color: '#222222',
  },
  common: {
    transition: 'all 1s ease',
  },
}

const buttonStyle: AppTheme = {
  dark: {
    background: '#3f51b5',
    color: 'white',
  },
  light: {
    background: '#03a9f4',
    color: 'black',
  },
  common: {
    transition: 'all 1s ease',
  },
}

export { buttonStyle, bodyStyle }
