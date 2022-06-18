import { createSlice } from "@reduxjs/toolkit";



const exercisesSlice = createSlice({
  name: 'exercises',

  initialState : {
    exercises : [],
    bodyPart: '',
  },

  reducers: {
    setExercises :(state,action)=>{
        state.exercises = action.payload
    },

    setBodyPart : (state,action)=>{
      state.bodyPart = action.payload
    }
  },
})

export const {setExercises,setBodyPart} = exercisesSlice.actions
export default exercisesSlice.reducer