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

const FavoritIconStyle: AppTheme = {
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
    opacity: 0.3,
  },
}

const FavoritListStyle: AppTheme = {
  dark: {
    background: '#37474F',
    color: 'white',
  },
  light: {
    background: '#F5F5F5',
    color: 'black',
  },
  common: {
    transition: 'all 1s ease',
    fontWeight: 'bold',
    padding: 50,
    alignItems: 'center',
    height: '100%',
  },
}

const removeIconStyle: AppTheme = {
  dark: {
    background: '#37474F',
    color: 'white',
  },
  light: {
    background: '#F5F5F5',
    color: 'black',
  },
  common: {
    transition: 'all 1s ease',
    cursor: 'pointer',
    marginLeft: '250px',
  },
}

export {
  buttonStyle,
  bodyStyle,
  FavoritIconStyle,
  FavoritListStyle,
  removeIconStyle,
}
