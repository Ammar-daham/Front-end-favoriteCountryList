import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countriesFetch, handleSearchBy } from '../redux/slices/countriesSlice'
import { AppDispatch, RootState } from '../redux/store'
import { AppTheme } from '../context/AppTheme'
import ThemeContext from '../context/themeProvider'
import { useHistory } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material'

export const CountriesTable = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  const history = useHistory()
  const handleRowClick = (country: any) => {
    history.push(`/products/${country.name.common}`)
    dispatch(handleSearchBy(country.name.common))
  }

  useEffect(() => {
    dispatch(countriesFetch())
  }, [dispatch])

  const { theme } = useContext(ThemeContext)

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

  const buttonThemeStyle = {
    ...buttonStyle.common,
    ...(theme === 'light' ? buttonStyle.light : buttonStyle.dark),
  }

  const bodyThemeStyle = {
    ...bodyStyle.common,
    ...(theme === 'light' ? bodyStyle.light : bodyStyle.dark),
  }

  return (
    <TableContainer component={Paper} style={bodyThemeStyle}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={bodyThemeStyle}>Flags</TableCell>
            <TableCell style={bodyThemeStyle}>Name</TableCell>
            <TableCell style={bodyThemeStyle}>Capital</TableCell>
            <TableCell style={bodyThemeStyle}>Languages</TableCell>
            <TableCell style={bodyThemeStyle}>Population</TableCell>
            <TableCell style={bodyThemeStyle}>Region</TableCell>
            <TableCell style={bodyThemeStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={bodyThemeStyle}>
          {countries.items.map((country) => (
            <TableRow
              key={country.name.common}
              onClick={() => handleRowClick(country)}
              hover
            >
              <TableCell sx={{ fontSize: 40 }}>
                {Object.values(country.flag)}
              </TableCell>
              <TableCell style={bodyThemeStyle}>
                {country.name.common}
              </TableCell>
              <TableCell style={bodyThemeStyle}>{country.capital[0]}</TableCell>
              <TableCell style={bodyThemeStyle}>
                <ul style={{ paddingLeft: 15 }}>
                  {Object.values(country.languages).map((language) => (
                    <li>{language}</li>
                  ))}
                </ul>
              </TableCell>
              <TableCell style={bodyThemeStyle}>{country.population}</TableCell>
              <TableCell style={bodyThemeStyle}>{country.region}</TableCell>
              <TableCell>
                <Button variant="contained" style={buttonThemeStyle}>
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
