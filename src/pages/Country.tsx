import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ThemeContext from '../context/themeProvider'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { buttonStyle, bodyStyle } from '../context/themeSetting'

export default function Country() {
  const { theme } = useContext(ThemeContext)

  const buttonThemeStyle = {
    ...buttonStyle.common,
    ...(theme === 'light' ? buttonStyle.light : buttonStyle.dark),
  }

  const bodyThemeStyle = {
    ...bodyStyle.common,
    ...(theme === 'light' ? bodyStyle.light : bodyStyle.dark),
  }

  const country = useSelector((state: RootState) =>
    state.countries.items.find((p) => {
      return p
    })
  )

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <>
      <Card sx={{ minWidth: 275, alignItems: 'center' }} style={bodyThemeStyle}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {country.name.common} {country.flag}
          </Typography>
          <Typography>Capital: {country.capital}</Typography>
          Population: {country.population}
          <Typography variant="body2">Region: {country.region}</Typography>
          <Typography variant="body2">Area: {country.area}</Typography>
          <ul style={{ paddingLeft: 15 }}>
            <Typography>Languages:</Typography>
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button size="small" style={buttonThemeStyle}>
            Add To Card
          </Button>
        </CardActions>
      </Card>
    </>
  )
}