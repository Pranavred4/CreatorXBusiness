import * as React from 'react';
import Box from '@mui/material/Box';


export default function BoxSx(props) {

  return (
    <Box 
      sx={{
        height : '200px',
        borderRadius: '10px',
        backgroundColor: 'white',
       
        '&:hover': {
          backgroundColor: 'lightgray',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
  
<Box />
        <div style={{ color:"gray" }}><span><img src={props.img} style={{marginTop:'20px'}}></img><h2>{props.title}</h2></span></div>
        <div style={{ textAlign : "center" }}>{props.count}</div>
    </Box>
  );
}