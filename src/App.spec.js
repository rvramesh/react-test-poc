import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

jest.mock("./context/SpecialControl.js", () => ({ onClick }) => <button onClick={onClick} data-testid="mock-button"></button>)

const renderComponent = () => {
    return render(<App />)
}

it('renders without crashing', () => {
    renderComponent()
    expect(App).toBeDefined()
})

it('handles click', () => {
    renderComponent()
    const button = screen.getByTestId("mock-button")
    fireEvent.click(button)
})