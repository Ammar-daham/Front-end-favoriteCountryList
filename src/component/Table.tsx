import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  countriesFetch,
  sortCountryCapital,
  sortCountryName,
  sortCountryPopulaion,
  sortCountryRegion,
} from '../redux/slices/countriesSlice'
import { AppDispatch, RootState } from '../redux/store'
import ThemeContext from '../context/themeProvider'
import { Link } from 'react-router-dom'
import { buttonStyle, bodyStyle } from '../context/themeSetting'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Box,
} from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export const CountriesTable = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  //const [name, setName] = useState(null)

  const handleAddToCart = (country: object) => {
    dispatch(addToCart(country))
  }

  const handleNameSorting = () => {
    dispatch(sortCountryName(countries))
  }

  const handleCapitalSorting = () => {
    dispatch(sortCountryCapital(countries))
  }

  const handlePopulationSorting = () => {
    dispatch(sortCountryPopulaion(countries))
  }

  const handleRegionSorting = () => {
    dispatch(sortCountryRegion(countries))
  }

  useEffect(() => {
    dispatch(countriesFetch())
  }, [dispatch])

  const { theme } = useContext(ThemeContext)

  const buttonThemeStyle = {
    ...buttonStyle.common,
    ...(theme === 'light' ? buttonStyle.light : buttonStyle.dark),
  }

  const bodyThemeStyle = {
    ...bodyStyle.common,
    ...(theme === 'light' ? bodyStyle.light : bodyStyle.dark),
  }

  return (
    <Box sx={{ padding: 15 }} style={bodyThemeStyle}>
      <Table stickyHeader aria-label="countries">
        <TableHead>
          <TableRow>
            <TableCell style={buttonThemeStyle}>Flags</TableCell>
            <TableCell style={buttonThemeStyle}>
              Name
              <IconButton aria-label="menu" onClick={() => handleNameSorting()}>
                <ArrowDropUpIcon style={buttonThemeStyle} />
              </IconButton>
            </TableCell>
            <TableCell style={buttonThemeStyle}>
              Capital
              <IconButton
                aria-label="menu"
                onClick={() => handleCapitalSorting()}
              >
                <ArrowDropUpIcon style={buttonThemeStyle} />
              </IconButton>
            </TableCell>
            <TableCell style={buttonThemeStyle}>Languages</TableCell>
            <TableCell style={buttonThemeStyle}>
              Population
              <IconButton
                aria-label="menu"
                onClick={() => handlePopulationSorting()}
              >
                <ArrowDropUpIcon style={buttonThemeStyle} />
              </IconButton>
            </TableCell>
            <TableCell style={buttonThemeStyle}>
              Region
              <IconButton
                aria-label="menu"
                onClick={() => handleRegionSorting()}
              >
                <ArrowDropUpIcon style={buttonThemeStyle} />
              </IconButton>
            </TableCell>
            <TableCell style={buttonThemeStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {countries.items.map((country) => (
            <TableRow key={country.name.common}>
              <TableCell sx={{ fontSize: 50 }} style={bodyThemeStyle}>
                <Link to={`/country/${country.name.common}`}>
                  {country.flag}
                </Link>
              </TableCell>
              <TableCell style={bodyThemeStyle}>
                {country.name.common}
              </TableCell>
              <TableCell style={bodyThemeStyle}>{country.capital[0]}</TableCell>
              <TableCell style={bodyThemeStyle}>
                <ul style={{ paddingLeft: 15 }}>
                  {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </TableCell>
              <TableCell style={bodyThemeStyle}>{country.population}</TableCell>
              <TableCell style={bodyThemeStyle}>{country.region}</TableCell>
              <TableCell style={bodyThemeStyle}>
                <Button
                  variant="contained"
                  style={buttonThemeStyle}
                  onClick={() => handleAddToCart(country)}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
