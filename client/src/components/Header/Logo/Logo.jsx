// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Logo =()=>{
  
return(
     
           <Box          
           component={Link}  to='/'
           sx={{
             height: 22,
             width: 130,
             mr:{sm: 2, md: 4},
             maxHeight: { xs: 20, md: 22 },
             maxWidth: { xs: 110, md: 130 },
           }}>
            <img src="../../img/logo_180x.png"
             alt="Logo_Rubix"
             width="100%"
              height="100%"
             sx={{ objectFit: 'contain' }}/>
           </Box>

          
)
}

export default Logo