import React from 'react'
import { Typography, Button, Stack } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'


const Detail = ({exerciseData}) => {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseData;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ];

  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', pt: "30px", justifyContent: "center" }}>
      
      <img src={gifUrl} alt={name} loading='lazy' style={{ width: "450px", height: "450px" }} />

        <Stack sx={{ gap: { lg: '35px', xs: "20px" } }}>

          <Typography variant='h4'>
            {name}
          </Typography>

          <Typography variant='h6'>
            Exercises keep you strong. {name} is one of the best <br />
            exercises to target you {target}. It will help you improve your<br />
            mood and gain more energy.
          </Typography>


          {/* icons */}
          {extraDetail.map((item) => (
            <Stack key={item.name} direction='row' gap='24px' alignItems='center'>

              <Button sx={{ background: "#fff2db", borderRadius: '50%', width: "90px", height: "90px" }}>
                <img src={item.icon} alt={bodyPart} />
              </Button>

              <Typography variant='h5' textTransform='capitalize'>
                {item.name}
              </Typography>

            </Stack>
          ))}
        </Stack>
    </Stack>
  )
}

export default Detail