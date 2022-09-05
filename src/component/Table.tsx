import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  countriesFetch,
  sortCountryCapital,
  sortCountryName,
  sortCountryPopulaion,
} from '../redux/slices/countriesSlice'
import { AppDispatch, RootState } from '../redux/store'
import ThemeContext from '../context/themeProvider'
import { useHistory } from 'react-router-dom'
import { buttonStyle, bodyStyle } from '../context/themeSetting'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export const CountriesTable = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  const history = useHistory()
  const handleRowClick = (country: any) => {
    history.push(`/country/${country.name.common}s`)
  }

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
    <TableContainer style={bodyThemeStyle}>
      <Table aria-label="countries">
        <TableHead>
          <TableRow>
            <TableCell style={bodyThemeStyle}>Flags</TableCell>
            <TableCell style={bodyThemeStyle}>
              Name
              <IconButton aria-label="menu" onClick={() => handleNameSorting()}>
                <ArrowDropUpIcon />
              </IconButton>
            </TableCell>
            <TableCell style={bodyThemeStyle}>
              Capital
              <IconButton
                aria-label="menu"
                onClick={() => handleCapitalSorting()}
              >
                <ArrowDropUpIcon />
              </IconButton>
            </TableCell>
            <TableCell style={bodyThemeStyle}>Languages</TableCell>
            <TableCell style={bodyThemeStyle}>
              Population
              <IconButton
                aria-label="menu"
                onClick={() => handlePopulationSorting()}
              >
                <ArrowDropUpIcon />
              </IconButton>
            </TableCell>
            <TableCell style={bodyThemeStyle}>Region</TableCell>
            <TableCell style={bodyThemeStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={bodyThemeStyle}>
          {countries.items.map((country, index) => (
            <TableRow key={index} hover>
              <TableCell
                sx={{ fontSize: 50 }}
                onClick={() => handleRowClick(country)}
              >
                {Object.values(country.flag)}
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
              <TableCell>
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
    </TableContainer>
  )
}
