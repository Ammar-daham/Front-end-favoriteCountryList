import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countriesFetch } from '../redux/slices/countriesSlice'
import { AppDispatch, RootState } from '../redux/store'

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

  useEffect(() => {
    dispatch(countriesFetch())
  }, [dispatch])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flags</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Region</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {countries.items.map((country) => (
              <TableRow key={country.name.common} hover>
                <TableCell component="th" scope="row" style={{ fontSize: 40 }}>
                  {Object.values(country.flag)}
                </TableCell>
                <TableCell>{country.name.common}</TableCell>
                <TableCell>{country.capital[0]}</TableCell>
                <TableCell>
                  <ul style={{ paddingLeft: 15 }}>
                    {Object.values(country.languages).map((language) => (
                      <li>{language}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>{country.population}</TableCell>
                <TableCell>{country.region}</TableCell>
                <TableCell>
                  <Button variant="contained">Add</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
