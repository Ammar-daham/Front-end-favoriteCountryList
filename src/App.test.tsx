// import React from 'react'
// import { render } from '@testing-library/react'
// import App from './App'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />)
//   const linkElement = getByText(/Countries/i)
//   expect(linkElement).toBeInTheDocument()
// })

import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store

  it('Shows "Countries"', () => {
    store = mockStore(initialState)
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(getByText('Countries')).not.toBeNull()
  })
})
