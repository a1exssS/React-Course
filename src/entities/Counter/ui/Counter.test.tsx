import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from 'shered/lib/tests/componentRender';

describe('Counter', () => {
   test('increment', () => {
      componentRender(<Counter />, {
         initialState: { counter: { value: 1 } },
      });

      const increment = screen.getByTestId('increment-button');
      const value = screen.getByTestId('value');

      fireEvent.click(increment);
      expect(value).toHaveTextContent('2');
   });
   test('decrement', () => {
      componentRender(<Counter />, {
         initialState: { counter: { value: 1 } },
      });

      const decrement = screen.getByTestId('decrement-button');
      const value = screen.getByTestId('value');
      fireEvent.click(decrement);
      expect(value).toHaveTextContent('0');
   });
});