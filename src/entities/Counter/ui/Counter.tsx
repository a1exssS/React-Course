import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shered/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {

   const dispatch = useDispatch()
   const value = useSelector(getCounterValue)

   const increment = () => {
      dispatch(counterActions.increment())
   }
   const decrement = () => {
      dispatch(counterActions.decrement())
   }

   return (
      <div>
         <h1 data-testid="value">{value}</h1>
         <Button onClick={increment} data-testid="increment-button">increase</Button>
         <Button onClick={decrement} data-testid="decrement-button">decrease</Button>
      </div>
   )
}
