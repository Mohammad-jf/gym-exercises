import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from './../utils/fetchData';
import Detail from './../components/Detail';
import ExercisesVideos from './../components/ExercisesVideos';
import SimilarExercises from './../components/SimilarExercises';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux'
import { setEquipmentMuscleData, setExerciseDetail, setExerciseVideos, setTargetMuscleData } from "../redux/exercisesSlice";


const ExerciseDetail = () => {
  const exerciseData = useSelector((state) => state.exercises.exerciseDetail);
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchExercisesData = async () => {
      // fetch exercise data
      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      dispatch(setExerciseDetail(exerciseDetailData));

      // related videos
      const exerciseVideoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youtubeOptions);
      dispatch(setExerciseVideos(exerciseVideoData));

      // similar exercises
      const targetMuscleExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      dispatch(setTargetMuscleData(targetMuscleExerciseData))

      const equipmentMuscleExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      dispatch(setEquipmentMuscleData(equipmentMuscleExerciseData));
    
    }

    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseData={exerciseData} />
      <ExercisesVideos name={exerciseData.name} />
      <SimilarExercises />
    </Box>
  )
};

export default ExerciseDetail;
