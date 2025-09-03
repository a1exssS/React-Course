import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import React, { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom';

interface componentRenderProps {
   route?: string;
   initialState?: DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode, options: componentRenderProps = {}) => {
   const { initialState, route = '/' } = options
   return render(
      <MemoryRouter initialEntries={[route]}>
         <StoreProvider initialState={initialState as StateSchema}>
            {component}
         </StoreProvider>
      </MemoryRouter>
   )
}
