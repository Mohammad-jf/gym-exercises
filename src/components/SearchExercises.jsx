import React, { useEffect, useState } from 'react'
import {Button,Stack,Box,TextField,Typography} from '@mui/material'
import { fontSize, padding } from '@mui/system'



const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>

      <Typography 
        fontWeight={700}
        sx={{fontSize:{lg:'44px',xs:'30px'},mb:'50px',textAlign:'center'}}>
        Awsome Exercises You<br/>Should Know
      </Typography>

      <Box position='relative' mb='72px'>

        <TextField sx={{
          input:{fontWeight:'700',border:'none',borderRadius:'5px'},
          width:{lg:"800px",xs:'350px'},backgroundColor:'#fff'}}
           height='76px'
           value=''
           onChange={(e)=>{}}
           placeholder='Search Exercises'
           type='text' />

           <Button className='search-btn' sx={{
             color:"#fff",
             textTransform:'none',
             width:{lg:'175px',xs:"80px"},
             height: '55px',
             fontSize:{lg:"20px",xs:'14px'},
             bgcolor:'#ff2625',
             marginLeft:'10px'
           }}>
            Search</Button>

      </Box>

    </Stack>
  )
}

export default SearchExercises