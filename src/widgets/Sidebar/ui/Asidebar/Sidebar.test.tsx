import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar', () => {
   test('getting sidebar id', () => {
      render(
         <MemoryRouter>
            <Sidebar />
         </MemoryRouter>)
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
   })
   test('toggle sidebar button', () => {
      render(
         <MemoryRouter>
            <Sidebar />
         </MemoryRouter>
      )
      const toggleButton = screen.getByTestId("sidebar-toggle")
      fireEvent.click(toggleButton)
      expect(screen.getByTestId("sidebar")).toHaveClass('collapsed')
   })
})