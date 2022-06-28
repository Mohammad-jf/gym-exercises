import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { Typography, Box, Stack } from '@mui/material';
import { fontSize } from '@mui/system';




const ExercisesVideos = ({ name }) => {
  const exerciseVideos = useSelector((state) => state.exercises.exerciseVideos.contents);

  return (
    <Box sx={{ marginTop: { lg: '150px', xs: '20px', }, p: "20px" }}>

      <Typography variant='h4' mb='33px'>
        Watch <span style={{ color: 'red', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack justifyContent='center' flexWrap='wrap' alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '5px' } }}>

        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a key={index} className="exercise-video"
           href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
           target='_blank'
           rel='noreferrer'
           >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{borderRadius:'7px'}}/>

            <Box textAlign='center' sx={{ color: '#000' }} >
              <Typography fontSize='20px' mb='5px' >
                {item.video.title}
              </Typography>

              <Typography color='red'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}

      </Stack>
    </Box>
  )
}

export default ExercisesVideos