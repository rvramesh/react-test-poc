import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import Control from '../Control'

const mockMethod = jest.fn()
const toggleReject = () => {
    mockMethod()
    return Promise.reject()
}

const toggleResolve = () => {
    mockMethod()
    return Promise.resolve()
}

afterEach(cleanup)

const renderComponent = (toggle) => {
    return render(<Control handle={toggle} />)
}

it('renders without crashing', () => {
    renderComponent(toggleResolve)
    expect(Control).toBeDefined()
})

it('handles click for reject', async () => {
    renderComponent(toggleReject)
    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(mockMethod).toBeCalledTimes(1)
})

it('handles click for resolve', async () => {
    renderComponent(toggleResolve)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(mockMethod).toBeCalledTimes(1)
})
