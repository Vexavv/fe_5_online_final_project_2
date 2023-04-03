import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1a1a1a',
    color:'#fff',
    '&:hover': {
        backgroundColor: '#ba933e',
    },
}));
function SaleBanner(props) {

    return (
        <Box component='div' mt={4}
             sx={{
                 backgroundImage: `url('https://res.cloudinary.com/dj9e1wjcg/image/upload/v1678445933/Final_project/Baners/bg-sofas_qbn7av.webp')`,
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center center',
                 backgroundSize: 'cover',
             }}
        >
<Box  display="flex" flexDirection='column'   sx={{
    padding:{sx:'16px', sm:'24px', md:'40px', lg:'50px', xl:'60px'}
}}>

    <Typography variant="h3"   fontFamily='Red Hat Display' fontWeight='700' ml={1} pt={5} pb={3}>
        Sale
    </Typography>
    <Box pt={1} pb={1} ml={1}>
        <ColorButton variant="contained" href="/products" >Go Shopping</ColorButton>
    </Box>
</Box>
        </Box>
    );
}

export default SaleBanner;