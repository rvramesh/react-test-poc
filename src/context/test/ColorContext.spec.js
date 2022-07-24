import React from 'react'
import {render, cleanup, renderHook} from '@testing-library/react'
import { ColoredApp, useColorMode } from '../ColorContext'

afterEach(cleanup)


const renderComponent = ()=>{
    return render(<ColoredApp />)
}
it('renders without crashing', () => {
  renderComponent() 
  expect(ColoredApp).toBeDefined()
})
it('returns current color', () => {
  const {result} = renderHook(() => useColorMode())
  expect(result.current).toEqual('light')
})