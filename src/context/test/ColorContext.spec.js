import React from 'react'
import { render, cleanup, renderHook, act } from '@testing-library/react'
import { ColoredApp, useColorMode } from '../ColorContext'

afterEach(cleanup)


const renderComponent = () => {
  return render(<ColoredApp />)
}
it('renders without crashing', () => {
  renderComponent()
  expect(ColoredApp).toBeDefined()
})

it('returns current color', () => {
  const { result } = renderHook(() => useColorMode(), {
    wrapper: ({ children }) => <ColoredApp>{children}</ColoredApp>
  })

  expect(result.current.colorMode.mode).toEqual('light')
  act(() => {
    result.current.update('dark')
  })
  expect(result.current.colorMode.mode).toEqual('dark')
})