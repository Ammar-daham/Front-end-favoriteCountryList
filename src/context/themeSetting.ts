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

const shoppingBasketStyle: AppTheme = {
  dark: {
    background: 'white',
    color: 'black',
  },
  light: {
    background: 'black',
    color: 'white',
  },
  common: {
    transition: 'all 1s ease',
    fontSize: 12,
    fontWeight: 'bold',
    height: 15,
    width: 15,
    borderRadius: 50,
    padding: 5,
    background: 'black',
    color: 'white',
    alignItems: 'center',
  },
}

export { buttonStyle, bodyStyle, shoppingBasketStyle }
