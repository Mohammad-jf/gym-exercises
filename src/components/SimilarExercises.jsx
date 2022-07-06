import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';





const SimilarExercises = () => {
  const targetMuscles = useSelector((state) => state.exercises.targetMuscleData)
  const equipmentMuscles = useSelector((state) => state.exercises.equipmentMuscleData)
  return (
    <Box sx={{ mt: { lg: '100px', xs: "5px" }, p: '20px' }}>
      <Typography variant='h4' mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction='row' sx={{ p: '2', position: 'relative', mb: "80px" }}>
        {targetMuscles.length ? <HorizontalScrollbar data={targetMuscles} /> : <Loader />}
      </Stack>

      <Typography variant='h4' mb={5}>
        Exercises that use the same equipment
      </Typography>

      <Stack direction='row' sx={{ p: '2', position: 'relative', mb: "30px" }}>
        {equipmentMuscles.length ? <HorizontalScrollbar data={equipmentMuscles} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises