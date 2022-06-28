import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "./../utils/fetchData";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setExercises, setBodyPart } from '../redux/exercisesSlice'
import ExerciseCard from "./ExerciseCard";


const Exercises = () => {
  const dispatch = useDispatch();
  // states
  const [currentPage, setCurrentPage] = useState(1);
  const exercises = useSelector((state) => state.exercises.exercises);
  const bodyPart = useSelector((state) => state.exercises.bodyPart);

  //pagination calculation
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1700, behavior: "smooth" });
  }



  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      if (bodyPart === "") {
        dispatch(setExercises(exercisesData));
      } else {
        const selectedExercises = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(bodyPart) ||
            exercise.target.toLowerCase().includes(bodyPart) ||
            exercise.equipment.toLowerCase().includes(bodyPart) ||
            exercise.bodyPart.toLowerCase().includes(bodyPart)
        );
        dispatch(setExercises(selectedExercises));
      }
    }
    fetchExerciseData();
  }, [bodyPart])




  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p="20px"
    >
      <Typography variant="h3" mb='60px'>
       Explore Exercises
      </Typography>



      {/* rendering items */}
      <Stack direction='row' sx={{ gap: { lg: '80px', xs: "50px" } }}
        flexWrap='wrap' justifyContent='center'
      >
        {
          currentExercises.map((exercise, index) =>
            <ExerciseCard key={index} exercise={exercise} />
          )
        }
      </Stack>


      {/* pagination */}
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  );
};

export default Exercises;