import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../fs12-fullstack/client/src/redux/store'
import App from '../../fs12-fullstack/client/src/components/App'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText('')).toBeInTheDocument()
})
