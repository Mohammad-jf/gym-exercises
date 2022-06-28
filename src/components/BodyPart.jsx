import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { setBodyPart } from "../redux/exercisesSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

const BodyPart = ({ item}) => {
  const dispatch = useDispatch();
  const bodyPart = useSelector((state) => state.exercises.bodyPart);


  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "240px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        dispatch(setBodyPart(item));
        window.scrollTo({ top: 1800, left: 100, });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
