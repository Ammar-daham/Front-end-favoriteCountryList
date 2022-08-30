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
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flags</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Capital</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Region</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {countries.items.map((country) => (
              <TableRow key={country.name.common}>
                <TableCell component="th" scope="row">
                  {Object.values(country.flag)}
                </TableCell>
                <TableCell align="right">{country.name.common}</TableCell>
                <TableCell align="right">{country.capital[0]}</TableCell>
                <TableCell align="right">
                  {Object.values(country.languages).map((language) => language)}
                </TableCell>
                <TableCell align="right">{country.population}</TableCell>
                <TableCell align="right">{country.region}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
