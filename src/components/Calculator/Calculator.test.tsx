import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Calculator from './Calculator'

describe('<Calculator />', () => {
  test('renders the calculator', () => {
    render(<Calculator />)

    expect(screen.getByRole('heading', { name: /calculator/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/calculator display/i)).toHaveTextContent('0')
  })

  test('updates the display with number and operator input', () => {
    render(<Calculator />)

    userEvent.click(screen.getByRole('button', { name: '7' }))
    userEvent.click(screen.getByRole('button', { name: /add/i }))
    userEvent.click(screen.getByRole('button', { name: '5' }))

    expect(screen.getByLabelText(/calculator display/i)).toHaveTextContent('5')
    expect(screen.getByText('7 + 5')).toBeInTheDocument()
  })

  test('computes a simple expression', () => {
    render(<Calculator />)

    userEvent.click(screen.getByRole('button', { name: '8' }))
    userEvent.click(screen.getByRole('button', { name: /multiply/i }))
    userEvent.click(screen.getByRole('button', { name: '4' }))
    userEvent.click(screen.getByRole('button', { name: /equals/i }))

    expect(screen.getByLabelText(/calculator display/i)).toHaveTextContent('32')
  })

  test('clear resets the display', () => {
    render(<Calculator />)

    userEvent.click(screen.getByRole('button', { name: '9' }))
    userEvent.click(screen.getByRole('button', { name: '3' }))
    userEvent.click(screen.getByRole('button', { name: /clear/i }))

    expect(screen.getByLabelText(/calculator display/i)).toHaveTextContent('0')
  })

  test('shows an error state when dividing by zero', () => {
    render(<Calculator />)

    userEvent.click(screen.getByRole('button', { name: '8' }))
    userEvent.click(screen.getByRole('button', { name: /divide/i }))
    userEvent.click(screen.getByRole('button', { name: '0' }))
    userEvent.click(screen.getByRole('button', { name: /equals/i }))

    expect(screen.getByLabelText(/calculator display/i)).toHaveTextContent('Error')
  })
})
