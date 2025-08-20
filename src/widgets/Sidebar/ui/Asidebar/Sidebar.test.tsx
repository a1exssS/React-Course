import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
   test('getting sidebar id', () => {
      render(<Sidebar />)
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
   })
   test('toggle sidebar button', () => {
      render(<Sidebar />)
      const toggleButton = screen.getByTestId("sidebar-toggle")
      fireEvent.click(toggleButton)
      expect(screen.getByTestId("sidebar")).toHaveClass('collapsed')
   })
})