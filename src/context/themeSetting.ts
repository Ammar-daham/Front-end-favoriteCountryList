import { AppTheme } from './AppTheme'

const bodyStyle: AppTheme = {
  dark: {
    background: '#121212',
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

const FavoriteIconStyle: AppTheme = {
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

const FavoriteIconStyle1: AppTheme = {
  dark: {
    background: '#292C33',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  },
  common: {
    transition: 'all 1s ease',
  },
}

const FavoriteListStyle: AppTheme = {
  dark: {
    background: '#121212',
    color: 'white',
  },
  light: {
    background: '#F5F5F5',
    color: '#222222',
  },
  common: {
    transition: 'all 1s ease',
    fontWeight: 'bold',
    padding: 20,
    alignItems: 'center',
    height: '100%',
  },
}

const removeIconStyle: AppTheme = {
  dark: {
    background: '#121212',
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

const cardStyle: AppTheme = {
  dark: {
    background: '#292C33',
    color: '#f5f5f5',
  },
  light: {
    background: 'white',
    color: 'black',
  },
  common: {
    transition: 'all 1s ease',
    borderCollapse: 'collapse',
    borderRadius: '1em',
    padding: 15,
    opacity: 0.9,
  },
}

const linkStyle: AppTheme = {
  dark: {
    background: '#292C33',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  },
  common: {
    transition: 'all 1s ease',
    textDecoration: 'none',
  },
}

export {
  buttonStyle,
  bodyStyle,
  FavoriteIconStyle,
  FavoriteIconStyle1,
  FavoriteListStyle,
  removeIconStyle,
  linkStyle,
  cardStyle,
}
