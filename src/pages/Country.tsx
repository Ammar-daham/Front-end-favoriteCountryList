import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { addToCart } from '../redux/slices/countriesSlice'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Grid,
} from '@mui/material'
import { bodyStyle, cardStyle } from '../context/themeSetting'
import { useParams } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ThemeContext from '../context/themeProvider'

export default function Country() {
  const { theme } = useContext(ThemeContext)

  const cardThemeStyle = {
    ...cardStyle.common,
    ...(theme === 'light' ? cardStyle.light : cardStyle.dark),
  }

  const bodyThemeStyle = {
    ...bodyStyle.common,
    ...(theme === 'light' ? bodyStyle.light : bodyStyle.dark),
  }

  const dispatch = useDispatch<AppDispatch>()
  const { name } = useParams<{ name: string }>()

  const { countries } = useSelector((state: RootState) => state)
  const country = countries.items.find(
    (country) => country.name.common === name
  )

  const handleAddToCart = (country: object) => {
    dispatch(addToCart(country))
  }

  if (!country) {
    return <div>Country not found</div>
  }

  const flagImg = Object.values(country.flags)[0]
  const map = Object.values(country.maps)[0]

  console.log(map)
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }} style={bodyThemeStyle}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              padding: 10,
            }}
            style={cardThemeStyle}
          >
            <Grid sx={{ textAlign: 'center' }}>
              <img
                src={flagImg}
                alt={country.name.common}
                style={{ borderRadius: '1em' }}
              ></img>
            </Grid>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {country.name.common}
              </Typography>
              <Typography>Capital: {country.capital}</Typography>
              <Typography>Population: {country.population}</Typography>
              <Typography>Region: {country.region}</Typography>
              <Typography>Area: {country.area} km²</Typography>
              <Typography>
                Currency: {Object.values(country.currencies)[0].name}{' '}
              </Typography>

              <ul style={{ paddingLeft: 15 }}>
                <Typography>Languages:</Typography>
                {Object.values(country.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
              <a href={map}>Location on map</a>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleAddToCart(country)}
              >
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={8} style={cardThemeStyle}>
          <div style={{ textAlign: 'center', padding: 200 }}>
            <h2>Global Map</h2>
            <h4>Coming soon...</h4>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}
