import React, { useEffect, useState } from "react";
import { Button, Stack, Box, TextField, Typography } from "@mui/material";
import { exerciseOptions } from "../utils/fetchData";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { useDispatch } from "react-redux";
import { setExercises } from "../redux/exercisesSlice";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(bodyPartsData);
    };
    fetchBodyPartsData();
  }, []);


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      dispatch(setExercises(searchedExercises));
    }
  };



  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Awsome Exercises You
        <br />
        Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "5px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            height: "55px",
            fontSize: { lg: "20px", xs: "14px" },
            bgcolor: "#ff2625",
            marginLeft: "10px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} isBodyPart />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
