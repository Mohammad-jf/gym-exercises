import { configureStore } from '@reduxjs/toolkit'
import  exercisesSliceReducer  from './exercisesSlice';


export const store = configureStore({
  reducer: {
    exercises : exercisesSliceReducer,
  },
})