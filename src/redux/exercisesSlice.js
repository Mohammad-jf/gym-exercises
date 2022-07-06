import { createSlice } from "@reduxjs/toolkit";

const exercisesSlice = createSlice({
  name: "exercises",

  initialState: {
    exercises: [],
    bodyPart: "",
    exerciseDetail:{},
    exerciseVideos:[],
    targetMuscleData:[],
    equipmentMuscleData:[],
  },

  reducers: {
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },

    setBodyPart: (state, action) => {
      state.bodyPart = action.payload;
    },

    setExerciseDetail:(state,action)=>{
      state.exerciseDetail = action.payload;
    },

    setExerciseVideos:(state,action)=>{
      state.exerciseVideos = action.payload;
    },

    setTargetMuscleData:(state,action)=>{
      state.targetMuscleData = action.payload;
    },

    setEquipmentMuscleData:(state,action)=>{
      state.equipmentMuscleData= action.payload;
    },
  },
});

export const { setExercises, setBodyPart,setExerciseDetail,setExerciseVideos,setTargetMuscleData,setEquipmentMuscleData } = exercisesSlice.actions;
export default exercisesSlice.reducer;
