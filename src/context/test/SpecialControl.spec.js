import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import SpecialControl from '../SpecialControl'

const toggle = jest.fn()
afterEach(cleanup)

jest.mock("../Control", () => ({ onClick, children }) => <div data-testid="my-testid" onClick={() => { onClick().catch(() => { }) }}>{children}</div>)

const renderComponent = () => {
    return render(<SpecialControl onClick={toggle} />)
}
it('renders without crashing', () => {
    renderComponent()
    expect(SpecialControl).toBeDefined()
})

it('test onclick', () => {
    renderComponent()
    //expect(SpecialControl).toBeDefined()
    const mockDiv = screen.getByTestId("my-testid")
    fireEvent.click(mockDiv)
    expect(toggle).toBeCalledTimes(1)
})
